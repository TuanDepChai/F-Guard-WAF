"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState, useEffect } from "react"
import { 
  Shield,
  Activity,
  Globe,
  BarChart,
  CheckCircle2,
  ArrowRight,
  FileText,
  MessageSquare,
  Play,
  Database,
  Terminal,
  Code,
  ShieldCheck,
  ShieldAlert,
  RefreshCw,
  AlertCircle,
  Search,
  Sliders,
  Download,
  Copy,
  File,
  Share,
  Star,
  Users,
  Lock,
  Key,
  Server,
  Network,
  Cpu,
  HardDrive,
  ServerCog,
  Wifi,
  Bell,
  Eye,
  Filter,
  Menu,
  Plus,
  Save,
  Trash,
  Upload,
  User,
  Video,
  Volume2,
  X,
  ZoomIn,
  ZoomOut,
  LineChart,
  PieChart,
  BarChart2,
  AlertTriangle,
  XCircle,
  FileCheck,
  FileSearch,
  Bug,
  ShieldX,
  Settings,
  LineChart as LineChartIcon,
  PieChart as PieChartIcon,
  Network as NetworkIcon,
  WifiOff,
  AlertCircle as AlertCircleIcon,
  BellOff,
  EyeOff,
  ToggleLeft,
  ToggleRight,
  Trash2,
  Download as DownloadIcon,
  Edit,
  Folder,
  FolderOpen,
  Hash,
  Link,
  List,
  MoreHorizontal,
  MoreVertical,
  Scissors,
  Star as StarIcon,
  Tag,
  Type,
  Underline,
  Unlink,
  UploadCloud,
  UserCheck,
  UserMinus,
  UserPlus,
  Users as UsersIcon,
  VolumeX,
  Wifi as WifiIcon
} from "lucide-react"

interface AttackScenario {
  id: string
  name: string
  description: string
  payload: string
  endpoint: string
  method: string
  expectedResult: string
  severity: "low" | "medium" | "high" | "critical"
  category: string
  mitigation: string
}

interface TestResult {
  timestamp: string
  attackType: string
  status: string
  details: string
  request: {
    endpoint: string
    method: string
    payload: string
  }
  response: {
    status: number
    headers: {
      "X-WAF-Status": string
      "X-WAF-Rule": string
      "X-WAF-Message": string
    }
  }
  severity: string
  category: string
  mitigation: string
}

const attackScenarios: AttackScenario[] = [
  {
    id: "sql-injection",
    name: "SQL Injection",
    description: "Test SQL Injection attack",
    payload: "' OR '1'='1",
    endpoint: "/api/users",
    method: "POST",
    expectedResult: "Blocked - SQL Injection detected in query parameters",
    severity: "critical",
    category: "Injection",
    mitigation: "Input validation and prepared statements"
  },
  {
    id: "xss",
    name: "XSS Attack",
    description: "Test Cross-Site Scripting attack",
    payload: "<script>alert('XSS')</script>",
    endpoint: "/api/comments",
    method: "POST",
    expectedResult: "Blocked - XSS payload detected in request body",
    severity: "high",
    category: "XSS",
    mitigation: "Output encoding and Content Security Policy"
  },
  {
    id: "path-traversal",
    name: "Path Traversal",
    description: "Test Path Traversal attack",
    payload: "../../../etc/passwd",
    endpoint: "/api/files",
    method: "GET",
    expectedResult: "Blocked - Path traversal attempt detected",
    severity: "high",
    category: "Path Traversal",
    mitigation: "Path validation and sanitization"
  },
  {
    id: "command-injection",
    name: "Command Injection",
    description: "Test Command Injection attack",
    payload: "& cat /etc/passwd",
    endpoint: "/api/system",
    method: "POST",
    expectedResult: "Blocked - Command injection attempt detected",
    severity: "critical",
    category: "Injection",
    mitigation: "Command validation and whitelisting"
  },
  {
    id: "csrf",
    name: "CSRF Attack",
    description: "Test Cross-Site Request Forgery",
    payload: "<form action='/api/transfer' method='POST'><input type='hidden' name='amount' value='1000'></form>",
    endpoint: "/api/transfer",
    method: "POST",
    expectedResult: "Blocked - CSRF token missing or invalid",
    severity: "high",
    category: "CSRF",
    mitigation: "CSRF tokens and SameSite cookies"
  },
  {
    id: "xxe",
    name: "XXE Attack",
    description: "Test XML External Entity attack",
    payload: "<?xml version='1.0'?><!DOCTYPE foo [<!ENTITY xxe SYSTEM 'file:///etc/passwd'>]><foo>&xxe;</foo>",
    endpoint: "/api/xml",
    method: "POST",
    expectedResult: "Blocked - XXE attack detected",
    severity: "critical",
    category: "XXE",
    mitigation: "Disable external entities and DTD processing"
  }
]

const features = [
  {
    title: "Real-time Protection",
    description: "See how FGuard WAF blocks threats in real-time",
    icon: <Shield className="h-6 w-6" />,
    color: "text-blue-500"
  },
  {
    title: "Attack Analytics",
    description: "Detailed analysis of security threats and attacks",
    icon: <BarChart className="h-6 w-6" />,
    color: "text-purple-500"
  },
  {
    title: "Performance Metrics",
    description: "Monitor system performance and response times",
    icon: <Activity className="h-6 w-6" />,
    color: "text-green-500"
  },
  {
    title: "Global Network",
    description: "Experience our worldwide security infrastructure",
    icon: <Globe className="h-6 w-6" />,
    color: "text-orange-500"
  }
]

const metrics = [
  {
    title: "Attack Attempts Blocked",
    value: "1.2M+",
    change: "+15%",
    trend: "up",
    icon: <ShieldCheck className="h-5 w-5" />,
    color: "text-green-500"
  },
  {
    title: "Response Time",
    value: "45ms",
    change: "-20%",
    trend: "down",
    icon: <Activity className="h-5 w-5" />,
    color: "text-blue-500"
  },
  {
    title: "Uptime",
    value: "99.99%",
    change: "+0.01%",
    trend: "up",
    icon: <Server className="h-5 w-5" />,
    color: "text-purple-500"
  },
  {
    title: "Protected Assets",
    value: "50K+",
    change: "+25%",
    trend: "up",
    icon: <Globe className="h-5 w-5" />,
    color: "text-orange-500"
  }
]

const securityFeatures = [
  {
    category: "Web Security",
    icon: <Shield className="h-5 w-5" />,
    color: "text-blue-500",
    items: [
      "OWASP Top 10 Protection",
      "Custom Rule Engine",
      "IP Reputation",
      "Geo-blocking",
      "Rate Limiting",
      "Bot Management"
    ]
  },
  {
    category: "Performance",
    icon: <Activity className="h-5 w-5" />,
    color: "text-green-500",
    items: [
      "Load Balancing",
      "Caching",
      "CDN Integration",
      "SSL/TLS Offloading",
      "Compression",
      "Image Optimization"
    ]
  },
  {
    category: "Monitoring",
    icon: <BarChart className="h-5 w-5" />,
    color: "text-purple-500",
    items: [
      "Real-time Analytics",
      "Attack Visualization",
      "Performance Metrics",
      "Custom Dashboards",
      "Alert System",
      "Log Management"
    ]
  }
]

export default function DemoPage() {
  const [selectedScenario, setSelectedScenario] = useState<string>("")
  const [customEndpoint, setCustomEndpoint] = useState<string>("")
  const [customMethod, setCustomMethod] = useState<string>("")
  const [customPayload, setCustomPayload] = useState<string>("")
  const [testResults, setTestResults] = useState<TestResult[]>([])
  const [isTesting, setIsTesting] = useState<boolean>(false)
  const [currentResult, setCurrentResult] = useState<TestResult | null>(null)
  const [activeTab, setActiveTab] = useState<string>("realtime")
  const [searchQuery, setSearchQuery] = useState<string>("")
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [selectedSeverity, setSelectedSeverity] = useState<string>("all")

  const handleScenarioSelect = (scenarioId: string) => {
    const scenario = attackScenarios.find(s => s.id === scenarioId)
    if (scenario) {
      setSelectedScenario(scenarioId)
      setCustomEndpoint(scenario.endpoint)
      setCustomMethod(scenario.method)
      setCustomPayload(scenario.payload)
    }
  }

  const runTest = () => {
    setIsTesting(true)
    setCurrentResult(null)

    // Simulate API call and WAF detection
    setTimeout(() => {
      const scenario = attackScenarios.find(s => s.id === selectedScenario)
      if (scenario) {
        const result: TestResult = {
          timestamp: new Date().toLocaleString(),
          attackType: scenario.name,
          status: "Blocked",
          details: scenario.expectedResult,
          request: {
            endpoint: customEndpoint,
            method: customMethod,
            payload: customPayload
          },
          response: {
            status: 403,
            headers: {
              "X-WAF-Status": "Blocked",
              "X-WAF-Rule": scenario.id,
              "X-WAF-Message": scenario.expectedResult
            }
          },
          severity: scenario.severity,
          category: scenario.category,
          mitigation: scenario.mitigation
        }

        setCurrentResult(result)
        setTestResults(prev => [result, ...prev])
        setActiveTab("realtime")
      }
      setIsTesting(false)
    }, 1500)
  }

  const filteredScenarios = attackScenarios.filter(scenario => {
    const matchesSearch = scenario.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         scenario.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "all" || scenario.category === selectedCategory
    const matchesSeverity = selectedSeverity === "all" || scenario.severity === selectedSeverity
    return matchesSearch && matchesCategory && matchesSeverity
  })

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "critical":
        return "text-red-500"
      case "high":
        return "text-orange-500"
      case "medium":
        return "text-yellow-500"
      case "low":
        return "text-green-500"
      default:
        return "text-gray-500"
    }
  }

  return (
    <main className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">Live Demo</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Experience FGuard WAF's powerful security features in action
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 bg-primary/10 rounded-lg ${feature.color}`}>
                      {feature.icon}
                    </div>
                    <div>
                      <div className="font-semibold mb-2">{feature.title}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {feature.description}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Live Security Metrics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {metrics.map((metric, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <div className="flex justify-center mb-4">
                        <div className={`p-3 bg-primary/10 rounded-full ${metric.color}`}>
                          {metric.icon}
                        </div>
                      </div>
                      <div className="text-3xl font-bold mb-2">{metric.value}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                        {metric.title}
                      </div>
                      <div className={`text-sm ${metric.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                        {metric.change}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Interactive Demo</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Test Attack Scenarios</h3>
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="flex-1">
                        <label className="block text-sm font-medium mb-2">Search Scenarios</label>
                        <div className="relative">
                          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                          <Input 
                            className="pl-10"
                            placeholder="Search scenarios..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="w-40">
                        <label className="block text-sm font-medium mb-2">Category</label>
                        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                          <SelectTrigger>
                            <SelectValue placeholder="All Categories" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">All Categories</SelectItem>
                            <SelectItem value="Injection">Injection</SelectItem>
                            <SelectItem value="XSS">XSS</SelectItem>
                            <SelectItem value="CSRF">CSRF</SelectItem>
                            <SelectItem value="XXE">XXE</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="w-40">
                        <label className="block text-sm font-medium mb-2">Severity</label>
                        <Select value={selectedSeverity} onValueChange={setSelectedSeverity}>
                          <SelectTrigger>
                            <SelectValue placeholder="All Severities" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">All Severities</SelectItem>
                            <SelectItem value="critical">Critical</SelectItem>
                            <SelectItem value="high">High</SelectItem>
                            <SelectItem value="medium">Medium</SelectItem>
                            <SelectItem value="low">Low</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Select Attack Scenario</label>
                      <Select onValueChange={handleScenarioSelect}>
                        <SelectTrigger>
                          <SelectValue placeholder="Choose scenario..." />
                        </SelectTrigger>
                        <SelectContent>
                          {filteredScenarios.map((scenario) => (
                            <SelectItem key={scenario.id} value={scenario.id}>
                              <div className="flex items-center gap-2">
                                <span>{scenario.name}</span>
                                <span className={`text-xs px-2 py-1 rounded-full ${
                                  scenario.severity === 'critical' ? 'bg-red-100 text-red-700' :
                                  scenario.severity === 'high' ? 'bg-orange-100 text-orange-700' :
                                  scenario.severity === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                                  'bg-green-100 text-green-700'
                                }`}>
                                  {scenario.severity}
                                </span>
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Endpoint</label>
                      <Input 
                        value={customEndpoint}
                        onChange={(e) => setCustomEndpoint(e.target.value)}
                        placeholder="/api/endpoint" 
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Method</label>
                      <Select value={customMethod} onValueChange={setCustomMethod}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select method..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="GET">GET</SelectItem>
                          <SelectItem value="POST">POST</SelectItem>
                          <SelectItem value="PUT">PUT</SelectItem>
                          <SelectItem value="DELETE">DELETE</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Payload</label>
                      <Textarea 
                        value={customPayload}
                        onChange={(e) => setCustomPayload(e.target.value)}
                        placeholder="Enter attack payload..." 
                        className="font-mono"
                      />
                    </div>

                    <Button 
                      className="w-full"
                      onClick={runTest}
                      disabled={isTesting}
                    >
                      {isTesting ? (
                        <>
                          <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                          Testing...
                        </>
                      ) : (
                        <>
                          Test Attack
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Results</h3>
                  <Tabs value={activeTab} onValueChange={setActiveTab}>
                    <TabsList className="mb-4">
                      <TabsTrigger value="realtime">Real-time</TabsTrigger>
                      <TabsTrigger value="history">History</TabsTrigger>
                    </TabsList>
                    <TabsContent value="realtime">
                      <div className="space-y-4">
                        <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                          <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                            <ShieldCheck className="h-5 w-5" />
                            <span className="font-medium">WAF Active</span>
                          </div>
                          <p className="text-sm text-green-600 dark:text-green-400 mt-2">
                            System is monitoring and protecting
                          </p>
                        </div>
                        <div className="h-[300px] border rounded-lg p-4 overflow-auto">
                          {currentResult ? (
                            <div className="space-y-4">
                              <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                                <div className="flex items-center justify-between mb-2">
                                  <span className="text-sm text-gray-500 dark:text-gray-400">
                                    {currentResult.timestamp}
                                  </span>
                                  <div className="flex items-center gap-2">
                                    <span className={`px-2 py-1 rounded-full text-xs ${
                                      currentResult.severity === 'critical' ? 'bg-red-100 text-red-700' :
                                      currentResult.severity === 'high' ? 'bg-orange-100 text-orange-700' :
                                      currentResult.severity === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                                      'bg-green-100 text-green-700'
                                    }`}>
                                      {currentResult.severity}
                                    </span>
                                    <span className="px-2 py-1 rounded-full text-xs bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-400">
                                      {currentResult.status}
                                    </span>
                                  </div>
                                </div>
                                <div className="font-medium mb-1">{currentResult.attackType}</div>
                                <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                                  {currentResult.details}
                                </div>
                                <div className="text-xs font-mono bg-gray-50 dark:bg-gray-900 p-2 rounded">
                                  <div>Request:</div>
                                  <div>{currentResult.request.method} {currentResult.request.endpoint}</div>
                                  <div>Payload: {currentResult.request.payload}</div>
                                  <div className="mt-2">Response:</div>
                                  <div>Status: {currentResult.response.status}</div>
                                  <div>X-WAF-Rule: {currentResult.response.headers["X-WAF-Rule"]}</div>
                                  <div className="mt-2">Mitigation:</div>
                                  <div>{currentResult.mitigation}</div>
                                </div>
                              </div>
                            </div>
                          ) : (
                            <div className="text-center text-gray-500 dark:text-gray-400">
                              {isTesting ? (
                                <div className="flex items-center justify-center gap-2">
                                  <RefreshCw className="h-4 w-4 animate-spin" />
                                  Running test...
                                </div>
                              ) : (
                                "Waiting for test results..."
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    </TabsContent>
                    <TabsContent value="history">
                      <div className="space-y-4">
                        {testResults.map((result, index) => (
                          <div key={index} className="p-4 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors duration-200">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm text-gray-500 dark:text-gray-400">
                                {result.timestamp}
                              </span>
                              <div className="flex items-center gap-2">
                                <span className={`px-2 py-1 rounded-full text-xs ${
                                  result.severity === 'critical' ? 'bg-red-100 text-red-700' :
                                  result.severity === 'high' ? 'bg-orange-100 text-orange-700' :
                                  result.severity === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                                  'bg-green-100 text-green-700'
                                }`}>
                                  {result.severity}
                                </span>
                                <span className={`px-2 py-1 rounded-full text-xs ${
                                  result.status === 'Blocked' 
                                    ? 'bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400'
                                    : 'bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-400'
                                }`}>
                                  {result.status}
                                </span>
                              </div>
                            </div>
                            <div className="font-medium mb-1">{result.attackType}</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                              {result.details}
                            </div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">
                              Mitigation: {result.mitigation}
                            </div>
                          </div>
                        ))}
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Security Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {securityFeatures.map((feature, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-2 bg-primary/10 rounded-lg ${feature.color}`}>
                        {feature.icon}
                      </div>
                      <div className="font-semibold text-lg">{feature.category}</div>
                    </div>
                    <div className="space-y-3">
                      {feature.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-center gap-2">
                          <CheckCircle2 className="h-5 w-5 text-green-500" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary">
                    <Play className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-semibold mb-2">Interactive Demo</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                      Try our interactive demo environment
                    </div>
                    <Button variant="outline" size="sm">
                      Launch Demo
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary">
                    <FileText className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-semibold mb-2">Documentation</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                      Access detailed documentation and guides
                    </div>
                    <Button variant="outline" size="sm">
                      View Docs
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary">
                    <MessageSquare className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-semibold mb-2">Support</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                      Get help from our security experts
                    </div>
                    <Button variant="outline" size="sm">
                      Contact Support
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}
