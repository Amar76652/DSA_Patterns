import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronLeft, 
  ChevronRight, 
  Calendar, 
  Code, 
  Target, 
  Users, 
  CheckCircle, 
  Play,
  Coffee,
  Github,
  MessageCircle,
  Bell,
  Trophy,
  Zap,
  Brain,
  Clock
} from 'lucide-react';

interface Slide {
  id: number;
  title: string;
  content: React.ReactNode;
}

const IntroPresentation: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const slides: Slide[] = [
    {
      id: 1,
      title: "Hook",
      content: (
        <div className="text-center space-y-8">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h1 className="text-6xl font-poppins font-bold gradient-text mb-6">
              90 Days to MAANG
            </h1>
            <div className="text-2xl text-gray-300 space-y-4">
              <p>From getting stuck on <span className="text-red-400 font-semibold">Two Sum</span>...</p>
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1 }}
                className="text-3xl text-maang-orange font-semibold"
              >
                ↓
              </motion.div>
              <p>To confidently solving <span className="text-green-400 font-semibold">Word Ladder</span> & <span className="text-green-400 font-semibold">Merge k Sorted Lists</span></p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="flex justify-center space-x-8 mt-12"
          >
            <div className="bg-slate-800 p-4 rounded-lg glow-effect">
              <Calendar className="w-8 h-8 text-maang-blue mx-auto mb-2" />
              <p className="text-sm">90 Days</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg glow-effect">
              <Code className="w-8 h-8 text-maang-orange mx-auto mb-2" />
              <p className="text-sm">Java Focus</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg glow-effect">
              <Target className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <p className="text-sm">MAANG Ready</p>
            </div>
          </motion.div>
        </div>
      )
    },
    {
      id: 2,
      title: "Credibility Stamp",
      content: (
        <div className="text-center space-y-8">
          <motion.h2
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-5xl font-poppins font-bold text-white mb-8"
          >
            Proven Track Record
          </motion.h2>
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 rounded-xl">
              <Trophy className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Google & Meta</h3>
              <p className="text-blue-100">Used this exact approach to land offers</p>
            </div>
            
            <div className="bg-gradient-to-br from-orange-600 to-orange-800 p-8 rounded-xl">
              <Users className="w-12 h-12 text-white mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">500+ Engineers</h3>
              <p className="text-orange-100">Successfully coached to MAANG offers</p>
            </div>
          </motion.div>
          
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Free, structured, and laser-focused on what actually appears in interviews
          </motion.p>
        </div>
      )
    },
    {
      id: 3,
      title: "Who This Is For",
      content: (
        <div className="space-y-8">
          <motion.h2
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="text-5xl font-poppins font-bold text-center gradient-text mb-12"
          >
            Perfect For You If...
          </motion.h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold text-maang-orange mb-4">You're Targeting:</h3>
              <div className="space-y-3">
                {['Google', 'Amazon', 'Microsoft', 'Meta', 'Apple', 'Netflix'].map((company, index) => (
                  <motion.div
                    key={company}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-center space-x-3 bg-slate-800 p-3 rounded-lg"
                  >
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-lg">{company}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold text-maang-blue mb-4">But You Struggle With:</h3>
              <div className="space-y-4">
                {[
                  'Should I use DFS or BFS here?',
                  'Is this a DP problem or greedy?',
                  'How do I even start?'
                ].map((question, index) => (
                  <motion.div
                    key={index}
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="bg-red-900/30 border border-red-500/50 p-4 rounded-lg"
                  >
                    <p className="text-red-200 italic">"{question}"</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-center bg-gradient-to-r from-maang-blue to-maang-orange p-6 rounded-xl max-w-2xl mx-auto"
          >
            <p className="text-xl font-semibold text-white">
              You know Java. You just need the system.
            </p>
          </motion.div>
        </div>
      )
    },
    {
      id: 4,
      title: "Course Philosophy",
      content: (
        <div className="space-y-8">
          <motion.h2
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-5xl font-poppins font-bold text-center gradient-text mb-8"
          >
            Pattern Recognition
          </motion.h2>
          
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-2xl text-center text-gray-300 max-w-4xl mx-auto mb-12"
          >
            MAANG interviews don't test memorization. They test <span className="text-maang-orange font-semibold">pattern recognition</span>.
          </motion.p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="pattern-card bg-slate-800 p-6 rounded-xl border border-maang-blue/30"
            >
              <div className="text-center space-y-4">
                <Brain className="w-12 h-12 text-maang-blue mx-auto" />
                <h3 className="text-xl font-semibold text-maang-blue">Problem</h3>
                <p className="text-gray-300 italic">"Find longest substring without repeating characters"</p>
                <div className="text-3xl text-maang-orange">↓</div>
                <div className="bg-maang-blue/20 p-3 rounded-lg">
                  <p className="text-maang-blue font-bold">Sliding Window!</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="pattern-card bg-slate-800 p-6 rounded-xl border border-green-500/30"
            >
              <div className="text-center space-y-4">
                <Zap className="w-12 h-12 text-green-400 mx-auto" />
                <h3 className="text-xl font-semibold text-green-400">Problem</h3>
                <p className="text-gray-300 italic">"Count distinct islands in a grid"</p>
                <div className="text-3xl text-maang-orange">↓</div>
                <div className="bg-green-500/20 p-3 rounded-lg">
                  <p className="text-green-400 font-bold">DFS + Hashing!</p>
                </div>
              </div>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-center bg-gradient-to-r from-purple-600 to-pink-600 p-8 rounded-xl max-w-4xl mx-auto"
          >
            <h3 className="text-2xl font-bold mb-4">This is not about memorization.</h3>
            <h3 className="text-2xl font-bold">It's about recognition.</h3>
          </motion.div>
        </div>
      )
    },
    {
      id: 5,
      title: "90-Day Roadmap",
      content: (
        <div className="space-y-8">
          <motion.h2
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-5xl font-poppins font-bold text-center gradient-text mb-12"
          >
            Your 90-Day Journey
          </motion.h2>
          
          <div className="space-y-8 max-w-6xl mx-auto">
            {[
              {
                phase: "Phase 1",
                days: "Days 1-30",
                title: "Core DSA Foundations",
                topics: ["Arrays", "Strings", "Linked Lists", "Stacks", "Queues", "Hashing"],
                patterns: ["Two Pointers", "Sliding Window", "Fast-Slow Pointers"],
                color: "from-blue-600 to-blue-800",
                delay: 0.2
              },
              {
                phase: "Phase 2", 
                days: "Days 31-60",
                title: "Algorithmic Depth",
                topics: ["Trees", "Graphs", "Recursion", "Binary Search", "Sorting"],
                patterns: ["DFS/BFS", "Divide & Conquer", "Interval Merging"],
                color: "from-orange-600 to-orange-800",
                delay: 0.4
              },
              {
                phase: "Phase 3",
                days: "Days 61-90", 
                title: "MAANG Mastery",
                topics: ["Dynamic Programming", "Backtracking", "Bit Manipulation"],
                patterns: ["Interview Simulations", "Communication Practice", "Behavioral Prep"],
                color: "from-green-600 to-green-800",
                delay: 0.6
              }
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: phase.delay }}
                className={`bg-gradient-to-r ${phase.color} p-6 rounded-xl`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{phase.phase}</h3>
                    <p className="text-lg opacity-90">{phase.days}</p>
                    <p className="text-xl font-semibold mt-2">{phase.title}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Topics:</h4>
                    <div className="flex flex-wrap gap-2">
                      {phase.topics.map((topic, i) => (
                        <span key={i} className="bg-white/20 px-2 py-1 rounded text-sm">{topic}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Patterns:</h4>
                    <div className="flex flex-wrap gap-2">
                      {phase.patterns.map((pattern, i) => (
                        <span key={i} className="bg-white/30 px-2 py-1 rounded text-sm font-medium">{pattern}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-center bg-slate-800 p-6 rounded-xl max-w-2xl mx-auto"
          >
            <p className="text-xl font-semibold gradient-text">
              By Day 90, you'll think like the interviewer.
            </p>
          </motion.div>
        </div>
      )
    },
    {
      id: 6,
      title: "What You'll Need",
      content: (
        <div className="space-y-8">
          <motion.h2
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-5xl font-poppins font-bold text-center gradient-text mb-12"
          >
            Simple Requirements
          </motion.h2>
          
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Coffee, title: "Java JDK 17+", desc: "Latest Java version" },
              { icon: Code, title: "IntelliJ IDEA", desc: "or VS Code" },
              { icon: Target, title: "LeetCode Account", desc: "Free tier works" },
              { icon: Github, title: "GitHub Repo", desc: "Track your progress" },
              { icon: Clock, title: "2 Hours/Day", desc: "Focused practice" },
              { icon: CheckCircle, title: "Consistency", desc: "Show up daily" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800 p-6 rounded-xl text-center glow-effect hover:scale-105 transition-transform"
              >
                <item.icon className="w-12 h-12 text-maang-blue mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-center space-y-4"
          >
            <p className="text-2xl text-gray-300">That's it.</p>
            <p className="text-3xl font-bold gradient-text">Consistency beats talent.</p>
            <p className="text-xl text-gray-400">Show up every day, code along, and trust the process.</p>
          </motion.div>
        </div>
      )
    },
    {
      id: 7,
      title: "How to Follow Along",
      content: (
        <div className="space-y-8">
          <motion.h2
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-5xl font-poppins font-bold text-center gradient-text mb-12"
          >
            Your Action Plan
          </motion.h2>
          
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-8"
          >
            <p className="text-xl text-gray-300">New videos drop <span className="text-maang-orange font-semibold">Monday through Sunday</span></p>
            <p className="text-lg text-gray-400">15-18 minutes each • Clear patterns • Clean Java code</p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Bell, title: "Subscribe & Bell", desc: "Never miss a video", color: "text-red-400" },
              { icon: Play, title: "Watch Daily Video", desc: "Code along actively", color: "text-maang-blue" },
              { icon: Target, title: "Solve Practice Problems", desc: "2 problems assigned daily", color: "text-green-400" },
              { icon: Users, title: "Join Live Q&A", desc: "Weekly sessions", color: "text-purple-400" },
              { icon: MessageCircle, title: "Discord Community", desc: "Share your progress", color: "text-maang-orange" }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="bg-slate-800 p-6 rounded-xl flex items-center space-x-4 hover:bg-slate-700 transition-colors"
              >
                <div className="flex-shrink-0">
                  <div className="bg-slate-700 p-3 rounded-full">
                    <step.icon className={`w-8 h-8 ${step.color}`} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">{step.title}</h3>
                  <p className="text-gray-400">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-center bg-gradient-to-r from-maang-blue to-maang-orange p-6 rounded-xl max-w-3xl mx-auto"
          >
            <p className="text-xl font-semibold text-white">
              We're building a supportive tribe of engineers pushing each other toward that offer.
            </p>
          </motion.div>
        </div>
      )
    },
    {
      id: 8,
      title: "Motivation & Closing",
      content: (
        <div className="text-center space-y-8">
          <motion.h2
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-5xl font-poppins font-bold gradient-text mb-8"
          >
            You Don't Need to Be a Genius
          </motion.h2>
          
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="space-y-6 text-2xl text-gray-300 max-w-4xl mx-auto"
          >
            <p>You need a <span className="text-maang-blue font-semibold">system</span>.</p>
            <p>You need <span className="text-maang-orange font-semibold">clarity</span>.</p>
            <p>And you need to <span className="text-green-400 font-semibold">start</span>.</p>
          </motion.div>
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="bg-slate-800 p-8 rounded-xl max-w-3xl mx-auto my-12"
          >
            <p className="text-xl text-gray-300 mb-4">This 90-day roadmap is that system.</p>
            <p className="text-lg text-gray-400">Set up your IDE • Create your GitHub repo • Get ready</p>
          </motion.div>
          
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="space-y-4"
          >
            <p className="text-xl text-gray-300">Tomorrow we begin:</p>
            <h3 className="text-3xl font-bold text-maang-orange">Day 1: Arrays & Two Pointers</h3>
            <p className="text-lg text-gray-400">Pattern Recognition in Java</p>
          </motion.div>
          
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="bg-gradient-to-r from-maang-blue via-purple-600 to-maang-orange p-8 rounded-xl max-w-2xl mx-auto mt-12"
          >
            <h2 className="text-4xl font-poppins font-bold text-white mb-4">90 Days. One Goal.</h2>
            <h2 className="text-4xl font-poppins font-bold text-white">Crack MAANG.</h2>
          </motion.div>
        </div>
      )
    },
    {
      id: 9,
      title: "Call to Action",
      content: (
        <div className="text-center space-y-8">
          <motion.h2
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-5xl font-poppins font-bold gradient-text mb-12"
          >
            Ready to Start?
          </motion.h2>
          
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="space-y-8"
          >
            <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
              Watch Day 1 before bed tonight. It's only 18 minutes—and it's the first step to your MAANG offer.
            </p>
            
            <motion.button
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-maang-blue to-maang-orange text-white text-2xl font-bold py-6 px-12 rounded-xl glow-effect hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-center space-x-4">
                <Play className="w-8 h-8" />
                <span>Watch Day 1 →</span>
              </div>
            </motion.button>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="grid grid-cols-3 gap-6 max-w-2xl mx-auto mt-12"
            >
              <div className="text-center">
                <div className="bg-slate-800 p-4 rounded-lg mb-2">
                  <Bell className="w-8 h-8 text-red-400 mx-auto" />
                </div>
                <p className="text-sm text-gray-400">Subscribe</p>
              </div>
              <div className="text-center">
                <div className="bg-slate-800 p-4 rounded-lg mb-2">
                  <MessageCircle className="w-8 h-8 text-maang-blue mx-auto" />
                </div>
                <p className="text-sm text-gray-400">Join Discord</p>
              </div>
              <div className="text-center">
                <div className="bg-slate-800 p-4 rounded-lg mb-2">
                  <Github className="w-8 h-8 text-maang-orange mx-auto" />
                </div>
                <p className="text-sm text-gray-400">Setup Repo</p>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="text-xl text-gray-400 mt-8"
          >
            I'll see you in Day 1.
          </motion.p>
        </div>
      )
    }
  ];

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <div className="slide-container bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="w-full h-full flex flex-col">
        {/* Progress Bar */}
        <div className="w-full bg-slate-700 h-2">
          <motion.div
            className="h-full bg-gradient-to-r from-maang-blue to-maang-orange"
            initial={{ width: 0 }}
            animate={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Main Content */}
        <div className="flex-1 relative overflow-hidden">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentSlide}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="absolute inset-0 flex items-center justify-center p-8"
            >
              <div className="w-full max-w-7xl">
                {slides[currentSlide].content}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center p-6 bg-slate-800/50">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="flex items-center space-x-2 px-4 py-2 bg-slate-700 rounded-lg hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            <span>Previous</span>
          </button>

          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentSlide ? 1 : -1);
                  setCurrentSlide(index);
                }}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-maang-orange' : 'bg-slate-600'
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className="flex items-center space-x-2 px-4 py-2 bg-slate-700 rounded-lg hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <span>Next</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Slide Counter */}
        <div className="absolute top-4 right-4 bg-slate-800/80 px-3 py-1 rounded-lg">
          <span className="text-sm text-gray-300">
            {currentSlide + 1} / {slides.length}
          </span>
        </div>
      </div>
    </div>
  );
};

export default IntroPresentation;