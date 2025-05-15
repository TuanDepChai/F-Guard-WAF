import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ApiDocsExamples() {
  return (
    <section id="examples" className="mt-12">
      <h2 className="text-3xl font-bold mb-6">Code Examples</h2>

      <Card>
        <CardHeader>
          <CardTitle>Working with the FGuard API</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="curl">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
              <TabsTrigger value="curl">cURL</TabsTrigger>
              <TabsTrigger value="python">Python</TabsTrigger>
              <TabsTrigger value="javascript">JavaScript</TabsTrigger>
              <TabsTrigger value="go">Go</TabsTrigger>
            </TabsList>

            <TabsContent value="curl" className="pt-4">
              <h3 className="text-xl font-semibold mb-3">List Security Rules</h3>
              <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto mb-6">
                <code>
                  curl -X GET "https://api.fguard.com/v1/rules" \
                  <br />
                  &nbsp;&nbsp;-H "Authorization: Bearer YOUR_API_KEY" \
                  <br />
                  &nbsp;&nbsp;-H "Content-Type: application/json"
                </code>
              </pre>

              <h3 className="text-xl font-semibold mb-3">Create a New Rule</h3>
              <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
                <code>
                  curl -X POST "https://api.fguard.com/v1/rules" \
                  <br />
                  &nbsp;&nbsp;-H "Authorization: Bearer YOUR_API_KEY" \
                  <br />
                  &nbsp;&nbsp;-H "Content-Type: application/json" \
                  <br />
                  &nbsp;&nbsp;-d {"{"}
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;"name": "Block SQL Injection",
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;"description": "Block SQL injection attempts",
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;"action": "block",
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;"conditions": [
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"{"}
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"field": "request.uri",
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"operator": "contains",
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"value": "SELECT"
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"}"}
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;]
                  <br />
                  &nbsp;&nbsp;{"}"}
                </code>
              </pre>
            </TabsContent>

            <TabsContent value="python" className="pt-4">
              <h3 className="text-xl font-semibold mb-3">List Security Rules</h3>
              <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto mb-6">
                <code>
                  import requests
                  <br />
                  <br />
                  api_key = "YOUR_API_KEY"
                  <br />
                  headers = {"{"}
                  <br />
                  &nbsp;&nbsp;"Authorization": f"Bearer {"{"}api_key{"}"}",
                  <br />
                  &nbsp;&nbsp;"Content-Type": "application/json"
                  <br />
                  {"}"}
                  <br />
                  <br />
                  response = requests.get("https://api.fguard.com/v1/rules", headers=headers)
                  <br />
                  <br />
                  if response.status_code == 200:
                  <br />
                  &nbsp;&nbsp;rules = response.json()
                  <br />
                  &nbsp;&nbsp;for rule in rules:
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;print(f"Rule: {"{"}rule['name']{"}"}
                  (ID: {"{"}rule['id']{"}"})")
                  <br />
                  else:
                  <br />
                  &nbsp;&nbsp;print(f"Error: {"{"}response.status_code{"}"}- {"{"}response.text{"}"}")
                </code>
              </pre>

              <h3 className="text-xl font-semibold mb-3">Create a New Rule</h3>
              <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
                <code>
                  import requests
                  <br />
                  import json
                  <br />
                  <br />
                  api_key = "YOUR_API_KEY"
                  <br />
                  headers = {"{"}
                  <br />
                  &nbsp;&nbsp;"Authorization": f"Bearer {"{"}api_key{"}"}",
                  <br />
                  &nbsp;&nbsp;"Content-Type": "application/json"
                  <br />
                  {"}"}
                  <br />
                  <br />
                  rule_data = {"{"}
                  <br />
                  &nbsp;&nbsp;"name": "Block SQL Injection",
                  <br />
                  &nbsp;&nbsp;"description": "Block SQL injection attempts",
                  <br />
                  &nbsp;&nbsp;"action": "block",
                  <br />
                  &nbsp;&nbsp;"conditions": [
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;{"{"}
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"field": "request.uri",
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"operator": "contains",
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"value": "SELECT"
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;{"}"}
                  <br />
                  &nbsp;&nbsp;]
                  <br />
                  {"}"}
                  <br />
                  <br />
                  response = requests.post(
                  <br />
                  &nbsp;&nbsp;"https://api.fguard.com/v1/rules",
                  <br />
                  &nbsp;&nbsp;headers=headers,
                  <br />
                  &nbsp;&nbsp;data=json.dumps(rule_data)
                  <br />
                  )
                  <br />
                  <br />
                  if response.status_code == 201:
                  <br />
                  &nbsp;&nbsp;new_rule = response.json()
                  <br />
                  &nbsp;&nbsp;print(f"Rule created with ID: {"{"}new_rule['id']{"}"}")
                  <br />
                  else:
                  <br />
                  &nbsp;&nbsp;print(f"Error: {"{"}response.status_code{"}"}- {"{"}response.text{"}"}")
                </code>
              </pre>
            </TabsContent>

            <TabsContent value="javascript" className="pt-4">
              <h3 className="text-xl font-semibold mb-3">List Security Rules</h3>
              <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto mb-6">
                <code>
                  const apiKey = 'YOUR_API_KEY';
                  <br />
                  <br />
                  async function listRules() {"{"}
                  <br />
                  &nbsp;&nbsp;try {"{"}
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;const response = await fetch('https://api.fguard.com/v1/rules', {"{"}
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;method: 'GET',
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;headers: {"{"}
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'Authorization': `Bearer ${"{"}apiKey{"}"}`,
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'Content-Type': 'application/json'
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"}"}
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;{"}"});
                  <br />
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;if (response.ok) {"{"}
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;const rules = await response.json();
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;rules.forEach(rule => {
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;console.log(`Rule: ${rule.name} (ID: ${rule.id})`)
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"}"});
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;{"}"} else {"{"}
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;console.error(`Error: ${response.status} - ${await
                  response.text()}`);
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;{"}"}
                  <br />
                  &nbsp;&nbsp;{"}"} catch (error) {"{"}
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;console.error('API request failed:', error);
                  <br />
                  &nbsp;&nbsp;{"}"}
                  <br />
                  {"}"}
                  <br />
                  <br />
                  listRules();
                </code>
              </pre>

              <h3 className="text-xl font-semibold mb-3">Create a New Rule</h3>
              <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
                <code>
                  const apiKey = 'YOUR_API_KEY';
                  <br />
                  <br />
                  async function createRule() {"{"}
                  <br />
                  &nbsp;&nbsp;const ruleData = {"{"}
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;name: 'Block SQL Injection',
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;description: 'Block SQL injection attempts',
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;action: 'block',
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;conditions: [
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"{"}
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;field: 'request.uri',
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;operator: 'contains',
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;value: 'SELECT'
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"}"}
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;]
                  <br />
                  &nbsp;&nbsp;{"}"};
                  <br />
                  <br />
                  &nbsp;&nbsp;try {"{"}
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;const response = await fetch('https://api.fguard.com/v1/rules', {"{"}
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;method: 'POST',
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;headers: {"{"}
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'Authorization': `Bearer ${"{"}apiKey{"}"}`,
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'Content-Type': 'application/json'
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"}"},
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;body: JSON.stringify(ruleData)
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;{"}"});
                  <br />
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;if (response.status === 201) {"{"}
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;const newRule = await response.json();
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;console.log(`Rule created with ID: ${"{"}newRule.id{"}"}`);
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;} else {"{"}
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;console.error(`Error: ${response.status} - ${await
                  response.text()}`);
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;{"}"}
                  <br />
                  &nbsp;&nbsp;{"}"} catch (error) {"{"}
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;console.error('API request failed:', error);
                  <br />
                  &nbsp;&nbsp;{"}"}
                  <br />
                  {"}"}
                  <br />
                  <br />
                  createRule();
                </code>
              </pre>
            </TabsContent>

            <TabsContent value="go" className="pt-4">
              <h3 className="text-xl font-semibold mb-3">List Security Rules</h3>
              <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto mb-6">
                <code>
                  package main
                  <br />
                  <br />
                  import (
                  <br />
                  &nbsp;&nbsp;"encoding/json"
                  <br />
                  &nbsp;&nbsp;"fmt"
                  <br />
                  &nbsp;&nbsp;"io/ioutil"
                  <br />
                  &nbsp;&nbsp;"net/http"
                  <br />
                  )
                  <br />
                  <br />
                  type Rule struct {"{"}
                  <br />
                  &nbsp;&nbsp;ID string `json:"id"`
                  <br />
                  &nbsp;&nbsp;Name string `json:"name"`
                  <br />
                  &nbsp;&nbsp;Description string `json:"description"`
                  <br />
                  &nbsp;&nbsp;Action string `json:"action"`
                  <br />
                  {"}"}
                  <br />
                  <br />
                  func main() {"{"}
                  <br />
                  &nbsp;&nbsp;apiKey := "YOUR_API_KEY"
                  <br />
                  &nbsp;&nbsp;url := "https://api.fguard.com/v1/rules"
                  <br />
                  <br />
                  &nbsp;&nbsp;req, err := http.NewRequest("GET", url, nil)
                  <br />
                  &nbsp;&nbsp;if err != nil {"{"}
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;fmt.Println("Error creating request:", err)
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;return
                  <br />
                  &nbsp;&nbsp;{"}"}
                  <br />
                  <br />
                  &nbsp;&nbsp;req.Header.Add("Authorization", "Bearer " + apiKey)
                  <br />
                  &nbsp;&nbsp;req.Header.Add("Content-Type", "application/json")
                  <br />
                  <br />
                  &nbsp;&nbsp;client := &http.Client{"{"}
                  {"}"};
                  <br />
                  &nbsp;&nbsp;resp, err := client.Do(req)
                  <br />
                  &nbsp;&nbsp;if err != nil {"{"}
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;fmt.Println("Error sending request:", err)
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;return
                  <br />
                  &nbsp;&nbsp;{"}"}
                  <br />
                  &nbsp;&nbsp;defer resp.Body.Close()
                  <br />
                  <br />
                  &nbsp;&nbsp;body, err := ioutil.ReadAll(resp.Body)
                  <br />
                  &nbsp;&nbsp;if err != nil {"{"}
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;fmt.Println("Error reading response:", err)
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;return
                  <br />
                  &nbsp;&nbsp;{"}"}
                  <br />
                  <br />
                  &nbsp;&nbsp;if resp.StatusCode == 200 {"{"}
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;var rules []Rule
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;err = json.Unmarshal(body, &rules)
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;if err != nil {"{"}
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;fmt.Println("Error parsing JSON:", err)
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;{"}"}
                  <br />
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;for _, rule := range rules {"{"}
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;fmt.Printf("Rule: %s (ID: %s)", rule.Name, rule.ID)
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;{"}"}
                  <br />
                  &nbsp;&nbsp;{"}"} else {"{"}
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;fmt.Printf("Error: %d - %s", resp.StatusCode, string(body))
                  <br />
                  &nbsp;&nbsp;{"}"}
                  <br />
                  {"}"}
                </code>
              </pre>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </section>
  )
}
