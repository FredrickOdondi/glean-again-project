import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Product } from '@/types/auth';
import { Send, ArrowLeft, Bot, User } from 'lucide-react';

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

    // Simulate AI processing steps
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

  const getStatusColor = (status: Step['status']) => {
    switch (status) {
      case 'completed': return 'text-green-600';
      case 'processing': return 'text-blue-600';
      default: return 'text-muted-foreground';
    }
  };

  const getStatusIcon = (status: Step['status']) => {
    switch (status) {
      case 'completed': return '✓';
      case 'processing': return '⟳';
      default: return '○';
    }
  };

  return (
    <div className="flex h-screen bg-background">
      {/* Chat Section */}
      <div className="flex-1 flex flex-col">
        <div className="p-4 border-b">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Button variant="ghost" size="sm" onClick={onBack}>
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <h1 className="text-xl font-semibold">{product}</h1>
            </div>
          </div>
        </div>

        <ScrollArea className="flex-1 p-4">
          <div className="space-y-4 max-w-4xl mx-auto">
            {messages.length === 0 && (
              <div className="text-center py-12">
                <Bot className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-lg font-medium mb-2">Welcome to {product}</h3>
                <p className="text-muted-foreground">Ask me anything to get started!</p>
              </div>
            )}
            
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`flex items-start space-x-2 max-w-3xl ${message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  <div className={`p-2 rounded-full ${message.type === 'user' ? 'bg-primary' : 'bg-muted'}`}>
                    {message.type === 'user' ? (
                      <User className="h-4 w-4 text-primary-foreground" />
                    ) : (
                      <Bot className="h-4 w-4 text-foreground" />
                    )}
                  </div>
                  <Card className={`${message.type === 'user' ? 'bg-primary text-primary-foreground' : ''}`}>
                    <CardContent className="p-3">
                      <p className="whitespace-pre-wrap">{message.content}</p>
                      <p className={`text-xs mt-2 ${message.type === 'user' ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>
                        {message.timestamp.toLocaleTimeString()}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
        </ScrollArea>

        {/* Input Section */}
        <div className="p-4 border-t">
          <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
            <div className="flex space-x-2">
              <Textarea
                placeholder={`Ask ${product} anything...`}
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="min-h-[50px] max-h-32"
                disabled={isProcessing}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSubmit(e);
                  }
                }}
              />
              <Button type="submit" disabled={!prompt.trim() || isProcessing}>
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </form>
        </div>
      </div>

      {/* AI Processing Steps Section */}
      <div className="w-80 border-l bg-muted/10">
        <Card className="h-full rounded-none border-0">
          <CardHeader>
            <CardTitle className="text-lg">AI Processing</CardTitle>
          </CardHeader>
          <CardContent className="flex-1">
            <ScrollArea className="h-full">
              <div className="space-y-4">
                {steps.length === 0 && (
                  <div className="text-center py-8">
                    <p className="text-muted-foreground text-sm">AI steps will appear here when processing your requests</p>
                  </div>
                )}
                
                {steps.map((step, index) => (
                  <div key={step.id}>
                    <div className="flex items-start space-x-3">
                      <div className={`mt-1 ${getStatusColor(step.status)}`}>
                        {getStatusIcon(step.status)}
                      </div>
                      <div className="flex-1">
                        <h4 className={`font-medium ${getStatusColor(step.status)}`}>
                          {step.title}
                        </h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          {step.description}
                        </p>
                        <p className="text-xs text-muted-foreground mt-2">
                          {step.timestamp.toLocaleTimeString()}
                        </p>
                      </div>
                    </div>
                    {index < steps.length - 1 && <Separator className="my-3" />}
                  </div>
                ))}
                <div ref={stepsEndRef} />
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ChatInterface;