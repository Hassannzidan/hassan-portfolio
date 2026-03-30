import { useState, useEffect } from "react";
import { MessageCircle, X, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";


import Lottie from "lottie-react";

import LittleRobot from "../../public/assets/animations/little_power_robot.json";
import { chatbotPredefinedQA, chatbotUi } from "@/data/chatbot";

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const quickQuestions = Object.keys(chatbotPredefinedQA);

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [showWelcome, setShowWelcome] = useState(true);

  //feat: magnatic
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Show welcome popup after 3 seconds on first visit
    const hasSeenWelcome = localStorage.getItem("chatbot-welcome-seen");
    if (!hasSeenWelcome) {
      const timer = setTimeout(() => {
        setShowWelcome(true);
        localStorage.setItem("chatbot-welcome-seen", "true");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  const addMessage = (text: string, isBot: boolean) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      isBot,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, newMessage]);
  };

  const handleQuestionClick = (question: string) => {
    addMessage(question, false);
    setTimeout(() => {
      addMessage(chatbotPredefinedQA[question] ?? "", true);
    }, 1000);
    setShowWelcome(false);
  };

  const openChat = () => {
    setIsOpen(true);
    setShowWelcome(false);
    if (messages.length === 0) {
      addMessage(chatbotUi.initialBotMessage, true);
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2); // فرق الماوس عن نص الزرار
    const y = e.clientY - (rect.top + rect.height / 2);

    // قلل القيمة عشان الحركة تبان خفيفة مش عنيفة
    setOffset({ x: x * 0.2, y: y * 0.2 });
  };

  const handleMouseLeave = () => {
    setOffset({ x: 0, y: 0 });
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
                  <p className="text-sm font-medium mb-2">
                    {chatbotUi.welcomePopupTitle}
                  </p>
                  <p className="text-xs text-muted-foreground mb-3">
                    {chatbotUi.welcomePopupSubtitle}
                  </p>
                  <div className="flex gap-2">
                    <Button size="sm" onClick={openChat} className="text-xs">
                      {chatbotUi.startChat}
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => setShowWelcome(false)}
                      className="text-xs"
                    >
                      {chatbotUi.later}
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
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={`fixed bottom-6 right-6 rounded-full shadow-lg z-50 transition-all duration-200 overflow-hidden
    ${isOpen
        ? "w-14 h-14 hover:scale-110"
        : "w-14 h-14 hover:w-16 hover:h-20 hover:scale-110"
    }`}
        style={{
          transform: `translate(${offset.x}px, ${offset.y}px) scale(1.05)`,
          transition: "transform 0.15s ease-out",
        }}
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <div className="w-36  h-24">
            <Lottie
              animationData={LittleRobot}
              loop={true}
              className="w-20 h-24"
            />
          </div>
        )}
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
                  <h3 className="font-semibold text-sm">{chatbotUi.headerTitle}</h3>
                  <p className="text-xs text-muted-foreground">
                    {chatbotUi.headerSubtitle}
                  </p>
                </div>
              </div>
            </CardHeader>

            <CardContent className="flex-1 flex flex-col min-h-0 p-4">
              {/* Messages */}
              <div className="flex-1 overflow-y-auto space-y-3 mb-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${
                      message.isBot ? "justify-start" : "justify-end"
                    }`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-lg text-sm ${
                        message.isBot
                          ? "bg-muted text-foreground"
                          : "bg-primary text-primary-foreground"
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
                    {chatbotUi.popularQuestionsLabel}
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
