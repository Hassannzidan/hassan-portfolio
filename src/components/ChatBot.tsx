
import { useState, useEffect } from 'react';
import { MessageCircle, X, Send, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [showWelcome, setShowWelcome] = useState(true);

  const predefinedQA = {
    "What tech stack do you use?": "I primarily work with the MEARN stack (MongoDB, Express.js, React, Angular,Node.js) along with TypeScript, Tailwind CSS, and various other modern web technologies.",
    "What are you currently learning?": "I'm currently diving deep into Java development, object-oriented programming principles, and design patterns. Always expanding my skillset!",
    "What's your experience level?": "I'm a passionate fullstack developer with solid experience in building web applications. I've worked on various projects ranging from startups to established companies.",
    "Where are you located?": "I'm based in Cairo, Egypt, and I'm open to both remote and local opportunities.",
    "What kind of projects do you work on?": "I build fullstack web applications, focusing on creating beautiful user interfaces and robust backend systems. I love turning complex problems into simple, elegant solutions.",
    "Are you available for freelance work?": "Yes! I'm always interested in exciting projects. Feel free to reach out through the contact section to discuss your needs.",
    "What's your favorite programming language?": "JavaScript/TypeScript holds a special place in my heart, but I'm also really enjoying my journey with Java. Each language has its own beauty!",
    "How do you stay updated with technology?": "I follow tech blogs, contribute to open-source projects, attend developer meetups, and constantly experiment with new technologies and frameworks.",
    "What's your development philosophy?": "I believe in writing clean, maintainable code and creating user-centered solutions. Continuous learning and staying curious are key to growth.",
    "How can I contact you?": "You can reach out to me through the contact section below, or connect with me on GitHub and LinkedIn. I'm always happy to chat about tech and opportunities!"
  };

  const quickQuestions = Object.keys(predefinedQA);

  useEffect(() => {
    // Show welcome popup after 3 seconds on first visit
    const hasSeenWelcome = localStorage.getItem('chatbot-welcome-seen');
    if (!hasSeenWelcome) {
      const timer = setTimeout(() => {
        setShowWelcome(true);
        localStorage.setItem('chatbot-welcome-seen', 'true');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  const addMessage = (text: string, isBot: boolean) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      isBot,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const handleQuestionClick = (question: string) => {
    addMessage(question, false);
    setTimeout(() => {
      addMessage(predefinedQA[question as keyof typeof predefinedQA], true);
    }, 1000);
    setShowWelcome(false);
  };

  const openChat = () => {
    setIsOpen(true);
    setShowWelcome(false);
    if (messages.length === 0) {
      addMessage("Hi! I'm Hassan's AI assistant. Ask me anything about his skills, experience, or projects! 🤖", true);
    }
  };

  return (
    <>
      {/* Welcome Popup */}
      {showWelcome && !isOpen && (
        <div className="fixed bottom-24 right-4 z-40 animate-fade-in">
          <Card className="bg-card border-primary/20 shadow-lg max-w-xs">
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <Bot className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium mb-2">Hi! I'm Hassan's AI assistant 👋</p>
                  <p className="text-xs text-muted-foreground mb-3">
                    Ask me anything about his skills, experience, or projects!
                  </p>
                  <div className="flex gap-2">
                    <Button size="sm" onClick={openChat} className="text-xs">
                      Start Chat
                    </Button>
                    <Button 
                      size="sm" 
                      variant="ghost" 
                      onClick={() => setShowWelcome(false)}
                      className="text-xs"
                    >
                      Later
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Floating Chat Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full shadow-lg z-50 hover:scale-110 transition-all duration-200"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </Button>

      {/* Chat Interface */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 h-96 z-40 animate-fade-in">
          <Card className="h-full bg-card border-primary/20 shadow-xl flex flex-col">
            <CardHeader className="pb-3 border-b border-border flex-shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                  <Bot className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">Hassan's Assistant</h3>
                  <p className="text-xs text-muted-foreground">Ask me anything!</p>
                </div>
              </div>
            </CardHeader>

            <CardContent className="flex-1 flex flex-col min-h-0 p-4">
              {/* Messages */}
              <div className="flex-1 overflow-y-auto space-y-3 mb-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-lg text-sm ${
                        message.isBot
                          ? 'bg-muted text-foreground'
                          : 'bg-primary text-primary-foreground'
                      }`}
                    >
                      {message.text}
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Questions */}
              {showWelcome && messages.length <= 1 && (
                <div className="mb-4">
                  <p className="text-xs text-muted-foreground mb-2 font-mono">
                    // Popular questions:
                  </p>
                  <div className="space-y-2">
                    {quickQuestions.slice(0, 3).map((question) => (
                      <button
                        key={question}
                        onClick={() => handleQuestionClick(question)}
                        className="w-full text-left p-2 text-xs bg-muted/50 hover:bg-muted rounded border border-border hover:border-primary/40 transition-colors duration-200"
                      >
                        {question}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* All Questions Grid */}
              {!showWelcome && (
                <div className="grid grid-cols-1 gap-1 max-h-32 overflow-y-auto">
                  {quickQuestions.map((question) => (
                    <button
                      key={question}
                      onClick={() => handleQuestionClick(question)}
                      className="text-left p-2 text-xs bg-muted/30 hover:bg-muted rounded border border-border hover:border-primary/40 transition-colors duration-200"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

export default ChatBot;
