import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Product } from '@/types/auth';
import { 
  Send, 
  ArrowLeft, 
  Bot, 
  User, 
  Sparkles, 
  Clock, 
  CheckCircle2, 
  Loader2, 
  Circle,
  MessageSquare,
  Zap,
  TrendingUp,
  Search,
  BarChart3
} from 'lucide-react';

interface Message {
  id: string;
  type: 'user' | 'ai';
  content: string;
  timestamp: Date;
}

interface Step {
  id: string;
  title: string;
  description: string;
  status: 'pending' | 'processing' | 'completed';
  timestamp: Date;
}

interface ChatInterfaceProps {
  product: Product;
  onBack: () => void;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({ product, onBack }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [steps, setSteps] = useState<Step[]>([]);
  const [prompt, setPrompt] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const stepsEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    stepsEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, steps]);

  const getProductIcon = (product: Product) => {
    switch (product) {
      case 'AI Assistants': return <Bot className="h-5 w-5" />;
      case 'AI Agents': return <Zap className="h-5 w-5" />;
      case 'Search': return <Search className="h-5 w-5" />;
      case 'Analytics': return <BarChart3 className="h-5 w-5" />;
      default: return <Bot className="h-5 w-5" />;
    }
  };

  const getProductColor = (product: Product) => {
    switch (product) {
      case 'AI Assistants': return 'bg-blue-100 text-blue-800 border-blue-300';
      case 'AI Agents': return 'bg-emerald-100 text-emerald-800 border-emerald-300';
      case 'Search': return 'bg-purple-100 text-purple-800 border-purple-300';
      case 'Analytics': return 'bg-orange-100 text-orange-800 border-orange-300';
      default: return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  const getProductDescription = (product: Product) => {
    switch (product) {
      case 'AI Assistants': return 'Intelligent helpers for your daily tasks';
      case 'AI Agents': return 'Autonomous agents working on your behalf';
      case 'Search': return 'Advanced search across your organization';
      case 'Analytics': return 'Data insights and performance metrics';
      default: return 'AI-powered solutions for your workflow';
    }
  };

  const simulateAIResponse = async (userMessage: string) => {
    setIsProcessing(true);
    
    // Add user message
    const userMsg: Message = {
      id: Math.random().toString(36).substr(2, 9),
      type: 'user',
      content: userMessage,
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, userMsg]);

    // For AI Assistants, call n8n workflow
    if (product === 'AI Assistants') {
      try {
        // Update processing steps for n8n
        setSteps(prev => [...prev, {
          id: Math.random().toString(36).substr(2, 9),
          title: 'Connecting to AI Workflow',
          description: 'Initializing n8n automation',
          status: 'processing',
          timestamp: new Date(),
        }]);

        // Call your n8n webhook
        const n8nWebhookUrl = 'https://otienoodondi5.app.n8n.cloud/webhook-test/24a62118-2af7-4d49-8484-fc249cd25916';
        
        const response = await fetch(n8nWebhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            message: userMessage,
            userId: 'user123', // Add user context
            timestamp: new Date().toISOString(),
            product: 'AI Assistants'
          })
        });

        if (response.ok) {
          const n8nResult = await response.json();
          
          console.log('n8n response received:', n8nResult);
          
          // Try multiple possible response fields and clean JSON responses
          let responseContent = '';
          if (n8nResult.response) {
            responseContent = n8nResult.response;
          } else if (n8nResult.message) {
            responseContent = n8nResult.message;
          } else if (n8nResult.content) {
            responseContent = n8nResult.content;
          } else if (n8nResult.text) {
            responseContent = n8nResult.text;
          } else if (n8nResult.data) {
            responseContent = typeof n8nResult.data === 'string' ? n8nResult.data : JSON.stringify(n8nResult.data);
          } else if (n8nResult.output) {
            responseContent = n8nResult.output;
          } else {
            responseContent = JSON.stringify(n8nResult) || 'I\'ve processed your request through the AI workflow.';
          }
          
          // Clean up JSON responses - remove curly brackets and quotes if the content looks like JSON
          if (responseContent.startsWith('{') && responseContent.endsWith('}')) {
            try {
              const parsed = JSON.parse(responseContent);
              // If it has an 'output' field, use that; otherwise use the whole parsed object
              if (parsed.output) {
                responseContent = parsed.output;
              } else if (parsed.message) {
                responseContent = parsed.message;
              } else if (parsed.content) {
                responseContent = parsed.content;
              } else if (parsed.text) {
                responseContent = parsed.text;
              } else {
                // If no specific field found, convert to a clean string representation
                responseContent = Object.entries(parsed)
                  .map(([key, value]) => `${key}: ${value}`)
                  .join('\n');
              }
            } catch (e) {
              // If parsing fails, keep the original content
              console.log('Failed to parse JSON response:', e);
            }
          }
          
          // Add AI response from n8n
          const aiMsg: Message = {
            id: Math.random().toString(36).substr(2, 9),
            type: 'ai',
            content: responseContent,
            timestamp: new Date(),
          };
          
          setMessages(prev => [...prev, aiMsg]);
          
          // Update steps to completed
          setSteps(prev => prev.map(step => 
            step.title === 'Connecting to AI Workflow' 
              ? { ...step, status: 'completed' }
              : step
          ));
        } else {
          throw new Error('n8n workflow failed');
        }
      } catch (error) {
        console.error('n8n integration error:', error);
        
        // Fallback to default response
        const aiResponse = generateProductResponse(product, userMessage);
        const aiMsg: Message = {
          id: Math.random().toString(36).substr(2, 9),
          type: 'ai',
          content: aiResponse,
          timestamp: new Date(),
        };
        
        setMessages(prev => [...prev, aiMsg]);
      }
    } else {
      // For other products, use existing simulation
    const processingSteps: Omit<Step, 'id' | 'timestamp'>[] = [
      { title: 'Analyzing Request', description: 'Understanding your query and context', status: 'processing' },
      { title: 'Searching Knowledge Base', description: 'Looking through relevant information', status: 'pending' },
      { title: 'Generating Response', description: 'Creating personalized response', status: 'pending' },
      { title: 'Quality Check', description: 'Validating response accuracy', status: 'pending' },
    ];

    // Add steps one by one with delays
    for (let i = 0; i < processingSteps.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const step: Step = {
        ...processingSteps[i],
        id: Math.random().toString(36).substr(2, 9),
        timestamp: new Date(),
        status: 'processing',
      };
      
      setSteps(prev => [...prev, step]);
      
      // Mark previous steps as completed
      if (i > 0) {
        setSteps(prev => prev.map((s, index) => 
          index === prev.length - 2 ? { ...s, status: 'completed' } : s
        ));
      }
      
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mark current step as completed
      setSteps(prev => prev.map(s => 
        s.id === step.id ? { ...s, status: 'completed' } : s
      ));
    }

    // Add AI response
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const aiResponse = generateProductResponse(product, userMessage);
    const aiMsg: Message = {
      id: Math.random().toString(36).substr(2, 9),
      type: 'ai',
      content: aiResponse,
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, aiMsg]);
    }
    
    setIsProcessing(false);
  };

  const generateProductResponse = (product: Product, query: string): string => {
    const responses = {
      'AI Assistants': `Based on your query about "${query}", I can help you create an AI assistant that specializes in this area. Here's what I can do:

• Analyze your specific requirements
• Suggest the best assistant configuration
• Set up automated workflows
• Provide training recommendations

Would you like me to create a custom assistant for your ${query} needs?`,
      'AI Agents': `I've analyzed your request for "${query}" and can deploy an autonomous agent to handle this. Here's my recommendation:

• Agent Type: Task Automation Agent
• Capabilities: Can work independently on your request
• Integration: Connects with your existing tools
• Monitoring: Real-time progress tracking

Shall I proceed with creating this agent for you?`,
      'Search': `I found relevant information for "${query}" across your organization:

• 15 documents match your criteria
• 8 team conversations reference this topic
• 3 project files contain related content
• 2 knowledge base articles provide background

Here are the most relevant results with detailed insights and recommendations.`,
      'Analytics': `Analytics report for "${query}":

• Performance Metrics: Trending upward (+15% this quarter)
• User Engagement: High activity in your department
• Recommendations: 3 optimization opportunities identified
• Forecasting: Projected growth of 23% next quarter

I can provide detailed breakdowns for any of these metrics.`
    };

    return responses[product] || `I'm processing your request about "${query}" using ${product}. Let me analyze this and provide you with detailed insights.`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim() || isProcessing) return;

    simulateAIResponse(prompt);
    setPrompt('');
  };

  const getStatusIcon = (status: Step['status']) => {
    switch (status) {
      case 'completed': return <CheckCircle2 className="h-4 w-4 text-green-600" />;
      case 'processing': return <Loader2 className="h-4 w-4 text-blue-600 animate-spin" />;
      default: return <Circle className="h-4 w-4 text-gray-400" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-teal-50 to-cyan-50">
      {/* Decorative doodles background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Top left doodle */}
        <div className="absolute top-20 left-10 w-16 h-16 opacity-10">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path d="M20,50 Q50,20 80,50 T20,50" stroke="#1E40AF" strokeWidth="2" fill="none" strokeLinecap="round"/>
            <circle cx="30" cy="45" r="2" fill="#1E40AF"/>
            <circle cx="70" cy="45" r="2" fill="#1E40AF"/>
          </svg>
        </div>
        
        {/* Top right doodle */}
        <div className="absolute top-32 right-16 w-12 h-12 opacity-10">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path d="M25,25 L75,75 M75,25 L25,75" stroke="#1E40AF" strokeWidth="3" strokeLinecap="round"/>
          </svg>
        </div>
        
        {/* Bottom left doodle */}
        <div className="absolute bottom-32 left-20 w-20 h-20 opacity-10">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="50" cy="50" r="40" stroke="#1E40AF" strokeWidth="2" fill="none"/>
            <path d="M30,40 Q50,60 70,40" stroke="#1E40AF" strokeWidth="2" fill="none" strokeLinecap="round"/>
          </svg>
        </div>
        
        {/* Bottom right doodle */}
        <div className="absolute bottom-20 right-24 w-16 h-16 opacity-10">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path d="M20,80 L80,80 L50,20 Z" stroke="#1E40AF" strokeWidth="2" fill="none"/>
            <circle cx="50" cy="70" r="3" fill="#1E40AF"/>
          </svg>
        </div>
      </div>

      {/* Header */}
      <header className="bg-gradient-to-r from-blue-100 to-teal-100 border-b-4 border-blue-200 sticky top-0 z-30 shadow-sm">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={onBack}
              className="hover:bg-blue-200/50 text-blue-800"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Button>
            <Separator orientation="vertical" className="h-6 bg-blue-300" />
            <div className="flex items-center space-x-3">
              <div className={`p-2 rounded-lg border-2 ${getProductColor(product)} shadow-sm`}>
                {getProductIcon(product)}
              </div>
              <div>
                <h1 className="text-xl font-semibold text-blue-900">{product}</h1>
                <p className="text-sm text-blue-700">{getProductDescription(product)}</p>
            </div>
          </div>
        </div>

          <div className="flex items-center space-x-2">
            <Badge className="bg-blue-200 text-blue-800 border-blue-300 shadow-sm">
              <Sparkles className="h-3 w-3 mr-1" />
              AI Powered
            </Badge>
          </div>
        </div>
      </header>

      <div className="flex h-[calc(100vh-80px)]">
        {/* Chat Section */}
        <div className="flex-1 flex flex-col">
          <ScrollArea className="flex-1 p-6">
            <div className="max-w-4xl mx-auto space-y-6">
            {messages.length === 0 && (
                <div className="text-center py-16">
                  {/* Notebook paper effect */}
                  <div className="relative inline-block">
                    <div className={`w-20 h-20 rounded-full ${getProductColor(product)} mb-6 shadow-lg border-2 border-blue-300`}>
                      <div className="w-full h-full flex items-center justify-center">
                        {getProductIcon(product)}
                      </div>
                    </div>
                    {/* Paper fold effect */}
                    <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-blue-200 rounded-bl-full shadow-sm"></div>
                  </div>
                  
                  <h3 className="text-2xl font-semibold text-blue-900 mb-3">Welcome to {product}</h3>
                  <p className="text-blue-700 text-lg max-w-md mx-auto mb-6">
                    I'm here to help you with {product.toLowerCase()}. Ask me anything to get started!
                  </p>
                  
                  {/* Notebook-style suggestion buttons */}
                  <div className="flex flex-wrap justify-center gap-3 max-w-lg mx-auto">
                    <Button variant="outline" size="sm" className="text-sm border-blue-300 text-blue-700 hover:bg-blue-100 hover:border-blue-400 shadow-sm">
                      "How do I get started?"
                    </Button>
                    <Button variant="outline" size="sm" className="text-sm border-blue-300 text-blue-700 hover:bg-blue-100 hover:border-blue-400 shadow-sm">
                      "Show me examples"
                    </Button>
                    <Button variant="outline" size="sm" className="text-sm border-blue-300 text-blue-700 hover:bg-blue-100 hover:border-blue-400 shadow-sm">
                      "What can you do?"
                    </Button>
                  </div>
              </div>
            )}
            
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`flex items-start space-x-3 max-w-2xl ${message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    <div className={`p-2.5 rounded-full ${message.type === 'user' ? 'bg-blue-600' : 'bg-blue-100'} shadow-sm border border-blue-200`}>
                    {message.type === 'user' ? (
                        <User className="h-4 w-4 text-white" />
                    ) : (
                        <Bot className="h-4 w-4 text-blue-700" />
                    )}
                  </div>
                    <Card className={`
                      ${message.type === 'user' 
                        ? 'bg-blue-600 text-white border-0 shadow-md' 
                        : 'bg-white border-2 border-blue-200 shadow-md'
                      }
                      relative
                    `}>
                      {/* Paper fold effect for AI messages */}
                      {message.type === 'ai' && (
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-blue-100 rounded-bl-full"></div>
                      )}
                      <CardContent className="p-4">
                        <p className="whitespace-pre-wrap leading-relaxed">{message.content}</p>
                        <div className={`flex items-center space-x-2 mt-3 ${message.type === 'user' ? 'text-blue-100' : 'text-blue-600'}`}>
                          <Clock className="h-3 w-3" />
                          <span className="text-xs">{message.timestamp.toLocaleTimeString()}</span>
                        </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
              
              {isProcessing && (
                <div className="flex justify-start">
                  <div className="flex items-start space-x-3 max-w-2xl">
                    <div className="p-2.5 rounded-full bg-blue-100 shadow-sm border border-blue-200">
                      <Bot className="h-4 w-4 text-blue-700" />
                    </div>
                    <Card className="bg-white border-2 border-blue-200 shadow-md relative">
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-blue-100 rounded-bl-full"></div>
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-2">
                          <Loader2 className="h-4 w-4 animate-spin text-blue-600" />
                          <span className="text-blue-700">Processing your request...</span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              )}
              
            <div ref={messagesEndRef} />
          </div>
        </ScrollArea>

        {/* Input Section */}
          <div className="p-6 border-t-2 border-blue-200 bg-gradient-to-r from-blue-50 to-teal-50">
          <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
              <div className="flex space-x-3">
              <Textarea
                placeholder={`Ask ${product} anything...`}
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                  className="min-h-[56px] max-h-32 resize-none border-2 border-blue-300 focus:border-blue-500 focus:ring-blue-500 bg-white shadow-sm"
                disabled={isProcessing}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSubmit(e);
                  }
                }}
              />
                <Button 
                  type="submit" 
                  disabled={!prompt.trim() || isProcessing}
                  className="px-6 bg-blue-600 hover:bg-blue-700 border-0 shadow-md text-white"
                >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </form>
        </div>
      </div>

      {/* AI Processing Steps Section */}
        <div className="w-80 bg-gradient-to-b from-blue-50 to-teal-50 border-l-2 border-blue-200">
          <div className="p-6">
            <div className="flex items-center space-x-2 mb-6">
              <MessageSquare className="h-5 w-5 text-blue-700" />
              <h3 className="text-lg font-semibold text-blue-900">AI Processing</h3>
            </div>
            
            <ScrollArea className="h-[calc(100vh-200px)]">
              <div className="space-y-4">
                {steps.length === 0 && (
                  <div className="text-center py-8">
                    <div className="w-12 h-12 mx-auto mb-3 bg-blue-100 rounded-full flex items-center justify-center border-2 border-blue-200 shadow-sm">
                      <Bot className="h-6 w-6 text-blue-600" />
                    </div>
                    <p className="text-blue-600 text-sm">AI processing steps will appear here when you make requests</p>
                  </div>
                )}
                
                {steps.map((step, index) => (
                  <div key={step.id}>
                    <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-blue-100/50 transition-colors border border-blue-200/50 bg-white/80 shadow-sm">
                        {getStatusIcon(step.status)}
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-blue-900 text-sm mb-1">
                          {step.title}
                        </h4>
                        <p className="text-xs text-blue-700 leading-relaxed">
                          {step.description}
                        </p>
                        <div className="flex items-center space-x-2 mt-2">
                          <Clock className="h-3 w-3 text-blue-500" />
                          <span className="text-xs text-blue-600">
                          {step.timestamp.toLocaleTimeString()}
                          </span>
                        </div>
                      </div>
                    </div>
                    {index < steps.length - 1 && <Separator className="my-3 bg-blue-200" />}
                  </div>
                ))}
                <div ref={stepsEndRef} />
              </div>
            </ScrollArea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;