import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"

export default function ApiDocsExamples() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold mb-6">Code Examples</h2>
      <p className="mb-6">
        Below are examples of how to use the FGuard API in different programming languages. These examples demonstrate
        how to list security rules and create a new rule.
      </p>

      <Tabs defaultValue="list" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="list">List Rules</TabsTrigger>
          <TabsTrigger value="create">Create Rule</TabsTrigger>
        </TabsList>

        <TabsContent value="list" className="mt-6 space-y-6">
          <Card>
            <CardContent className="pt-6">
              <Tabs defaultValue="curl" className="w-full">
                <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
                  <TabsTrigger value="curl">cURL</TabsTrigger>
                  <TabsTrigger value="python">Python</TabsTrigger>
                  <TabsTrigger value="javascript">JavaScript</TabsTrigger>
                  <TabsTrigger value="go">Go</TabsTrigger>
                </TabsList>

                <TabsContent value="curl" className="mt-4">
                  <div className="bg-slate-900 text-white rounded-lg p-4 font-mono text-sm overflow-x-auto">
                    <pre>{`curl -X GET "https://api.fguard.com/v1/rules" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`}</pre>
                  </div>
                </TabsContent>

                <TabsContent value="python" className="mt-4">
                  <div className="bg-slate-900 text-white rounded-lg p-4 font-mono text-sm overflow-x-auto">
                    <pre>{`import requests

api_key = "YOUR_API_KEY"
url = "https://api.fguard.com/v1/rules"

headers = {
    "Authorization": f"Bearer {api_key}",
    "Content-Type": "application/json"
}

response = requests.get(url, headers=headers)
rules = response.json()

for rule in rules:
    print(f"Rule: {rule['name']} (ID: {rule['id']})")`}</pre>
                  </div>
                </TabsContent>

                <TabsContent value="javascript" className="mt-4">
                  <div className="bg-slate-900 text-white rounded-lg p-4 font-mono text-sm overflow-x-auto">
                    <pre>{`// Using fetch API
const apiKey = 'YOUR_API_KEY';
const url = 'https://api.fguard.com/v1/rules';

fetch(url, {
  method: 'GET',
  headers: {
    'Authorization': \`Bearer \${apiKey}\`,
    'Content-Type': 'application/json'
  }
})
.then(response => response.json())
.then(rules => {
  rules.forEach(rule => {
    console.log(\`Rule: \${rule.name} (ID: \${rule.id})\`);
  });
})
.catch(error => console.error('Error:', error));`}</pre>
                  </div>
                </TabsContent>

                <TabsContent value="go" className="mt-4">
                  <div className="bg-slate-900 text-white rounded-lg p-4 font-mono text-sm overflow-x-auto">
                    <pre>{`package main

import (
    "encoding/json"
    "fmt"
    "io/ioutil"
    "net/http"
)

type Rule struct {
    ID   string \`json:"id"\`
    Name string \`json:"name"\`
}

func main() {
    apiKey := "YOUR_API_KEY"
    url := "https://api.fguard.com/v1/rules"

    client := &http.Client{}
    req, _ := http.NewRequest("GET", url, nil)
    req.Header.Add("Authorization", "Bearer "+apiKey)
    req.Header.Add("Content-Type", "application/json")

    resp, err := client.Do(req)
    if err != nil {
        fmt.Println("Error:", err)
        return
    }
    defer resp.Body.Close()

    body, _ := ioutil.ReadAll(resp.Body)
    
    var rules []Rule
    json.Unmarshal(body, &rules)
    
    for _, rule := range rules {
        fmt.Printf("Rule: %s (ID: %s)\\n", rule.Name, rule.ID)
    }
}`}</pre>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          <div className="bg-slate-50 dark:bg-slate-800 border rounded-lg p-4">
            <h4 className="font-medium mb-2">Response</h4>
            <div className="bg-slate-900 text-white rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <pre>{`[
  {
    "id": "rule_1a2b3c4d",
    "name": "Block SQL Injection",
    "description": "Blocks common SQL injection patterns",
    "priority": 1,
    "action": "block",
    "created_at": "2023-01-15T10:30:00Z",
    "updated_at": "2023-03-20T14:15:30Z"
  },
  {
    "id": "rule_5e6f7g8h",
    "name": "Rate Limit API Requests",
    "description": "Limits API requests to 100 per minute per IP",
    "priority": 2,
    "action": "rate_limit",
    "created_at": "2023-02-10T09:45:00Z",
    "updated_at": "2023-02-10T09:45:00Z"
  }
]`}</pre>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="create" className="mt-6 space-y-6">
          <Card>
            <CardContent className="pt-6">
              <Tabs defaultValue="curl" className="w-full">
                <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
                  <TabsTrigger value="curl">cURL</TabsTrigger>
                  <TabsTrigger value="python">Python</TabsTrigger>
                  <TabsTrigger value="javascript">JavaScript</TabsTrigger>
                  <TabsTrigger value="go">Go</TabsTrigger>
                </TabsList>

                <TabsContent value="curl" className="mt-4">
                  <div className="bg-slate-900 text-white rounded-lg p-4 font-mono text-sm overflow-x-auto">
                    <pre>{`curl -X POST "https://api.fguard.com/v1/rules" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "Block XSS Attacks",
    "description": "Blocks common cross-site scripting patterns",
    "priority": 1,
    "action": "block",
    "conditions": [
      {
        "field": "request.headers.user-agent",
        "operator": "contains",
        "value": "script"
      }
    ]
  }'`}</pre>
                  </div>
                </TabsContent>

                <TabsContent value="python" className="mt-4">
                  <div className="bg-slate-900 text-white rounded-lg p-4 font-mono text-sm overflow-x-auto">
                    <pre>{`import requests
import json

api_key = "YOUR_API_KEY"
url = "https://api.fguard.com/v1/rules"

headers = {
    "Authorization": f"Bearer {api_key}",
    "Content-Type": "application/json"
}

data = {
    "name": "Block XSS Attacks",
    "description": "Blocks common cross-site scripting patterns",
    "priority": 1,
    "action": "block",
    "conditions": [
        {
            "field": "request.headers.user-agent",
            "operator": "contains",
            "value": "script"
        }
    ]
}

response = requests.post(url, headers=headers, data=json.dumps(data))
new_rule = response.json()

print(f"Created rule: {new_rule['name']} (ID: {new_rule['id']})")`}</pre>
                  </div>
                </TabsContent>

                <TabsContent value="javascript" className="mt-4">
                  <div className="bg-slate-900 text-white rounded-lg p-4 font-mono text-sm overflow-x-auto">
                    <pre>{`// Using fetch API
const apiKey = 'YOUR_API_KEY';
const url = 'https://api.fguard.com/v1/rules';

const data = {
  name: 'Block XSS Attacks',
  description: 'Blocks common cross-site scripting patterns',
  priority: 1,
  action: 'block',
  conditions: [
    {
      field: 'request.headers.user-agent',
      operator: 'contains',
      value: 'script'
    }
  ]
};

fetch(url, {
  method: 'POST',
  headers: {
    'Authorization': \`Bearer \${apiKey}\`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
})
.then(response => response.json())
.then(newRule => {
  console.log(\`Created rule: \${newRule.name} (ID: \${newRule.id})\`);
})
.catch(error => console.error('Error:', error));`}</pre>
                  </div>
                </TabsContent>

                <TabsContent value="go" className="mt-4">
                  <div className="bg-slate-900 text-white rounded-lg p-4 font-mono text-sm overflow-x-auto">
                    <pre>{`package main

import (
    "bytes"
    "encoding/json"
    "fmt"
    "io/ioutil"
    "net/http"
)

type Rule struct {
    ID          string      \`json:"id,omitempty"\`
    Name        string      \`json:"name"\`
    Description string      \`json:"description"\`
    Priority    int         \`json:"priority"\`
    Action      string      \`json:"action"\`
    Conditions  []Condition \`json:"conditions"\`
}

type Condition struct {
    Field    string \`json:"field"\`
    Operator string \`json:"operator"\`
    Value    string \`json:"value"\`
}

func main() {
    apiKey := "YOUR_API_KEY"
    url := "https://api.fguard.com/v1/rules"

    rule := Rule{
        Name:        "Block XSS Attacks",
        Description: "Blocks common cross-site scripting patterns",
        Priority:    1,
        Action:      "block",
        Conditions: []Condition{
            {
                Field:    "request.headers.user-agent",
                Operator: "contains",
                Value:    "script",
            },
        },
    }

    ruleJSON, _ := json.Marshal(rule)
    
    client := &http.Client{}
    req, _ := http.NewRequest("POST", url, bytes.NewBuffer(ruleJSON))
    req.Header.Add("Authorization", "Bearer "+apiKey)
    req.Header.Add("Content-Type", "application/json")

    resp, err := client.Do(req)
    if err != nil {
        fmt.Println("Error:", err)
        return
    }
    defer resp.Body.Close()

    body, _ := ioutil.ReadAll(resp.Body)
    
    var newRule Rule
    json.Unmarshal(body, &newRule)
    
    fmt.Printf("Created rule: %s (ID: %s)\\n", newRule.Name, newRule.ID)
}`}</pre>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          <div className="bg-slate-50 dark:bg-slate-800 border rounded-lg p-4">
            <h4 className="font-medium mb-2">Response</h4>
            <div className="bg-slate-900 text-white rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <pre>{`{
  "id": "rule_9i8j7k6l",
  "name": "Block XSS Attacks",
  "description": "Blocks common cross-site scripting patterns",
  "priority": 1,
  "action": "block",
  "conditions": [
    {
      "field": "request.headers.user-agent",
      "operator": "contains",
      "value": "script"
    }
  ],
  "created_at": "2023-04-25T11:20:00Z",
  "updated_at": "2023-04-25T11:20:00Z"
}`}</pre>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
