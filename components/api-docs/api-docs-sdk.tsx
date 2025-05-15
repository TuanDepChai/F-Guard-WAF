import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Download } from "lucide-react"

export default function ApiDocsSdk() {
  return (
    <section id="sdk" className="mt-12">
      <h2 className="text-3xl font-bold mb-6">SDK & Libraries</h2>

      <Card>
        <CardHeader>
          <CardTitle>Official FGuard SDKs</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-6">
            We provide official SDKs for popular programming languages to make integrating with the FGuard API easier.
            These SDKs handle authentication, rate limiting, and provide type-safe interfaces for all API endpoints.
          </p>

          <Tabs defaultValue="node">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
              <TabsTrigger value="node">Node.js</TabsTrigger>
              <TabsTrigger value="python">Python</TabsTrigger>
              <TabsTrigger value="java">Java</TabsTrigger>
              <TabsTrigger value="dotnet">.NET</TabsTrigger>
            </TabsList>

            <TabsContent value="node" className="pt-4">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Node.js SDK</h3>
                  <p className="text-gray-600 dark:text-gray-400">Compatible with Node.js 14+ and TypeScript</p>
                </div>
                <Link href="#">
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <Download className="h-4 w-4" />
                    <span>Download</span>
                  </Button>
                </Link>
              </div>

              <h4 className="font-medium mb-2">Installation</h4>
              <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto mb-4">
                <code>npm install fguard-sdk</code>
              </pre>

              <h4 className="font-medium mb-2">Usage Example</h4>
              <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
                <code>
                  const {"{"} FGuardClient {"}"} = require('fguard-sdk');
                  <br />
                  <br />
                  // Initialize the client
                  <br />
                  const client = new FGuardClient({"{"} apiKey: 'YOUR_API_KEY' {"}"});
                  <br />
                  <br />
                  // List all rules
                  <br />
                  async function listRules() {"{"}
                  <br />
                  &nbsp;&nbsp;try {"{"}
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;const rules = await client.rules.list();
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;console.log('Rules:', rules);
                  <br />
                  &nbsp;&nbsp;{"}"} catch (error) {"{"}
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;console.error('Error:', error);
                  <br />
                  &nbsp;&nbsp;{"}"}
                  <br />
                  {"}"}
                  <br />
                  <br />
                  // Create a new rule
                  <br />
                  async function createRule() {"{"}
                  <br />
                  &nbsp;&nbsp;try {"{"}
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;const newRule = await client.rules.create({"{"}
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;name: 'Block SQL Injection',
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;description: 'Block SQL injection attempts',
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;action: 'block',
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;conditions: [
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"{"}
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;field: 'request.uri',
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;operator: 'contains',
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;value: 'SELECT'
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"}"}
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;{"}"});
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;console.log('New rule created:', newRule);
                  <br />
                  &nbsp;&nbsp;{"}"} catch (error) {"{"}
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;console.error('Error:', error);
                  <br />
                  &nbsp;&nbsp;{"}"}
                  <br />
                  {"}"}
                </code>
              </pre>
            </TabsContent>

            <TabsContent value="python" className="pt-4">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Python SDK</h3>
                  <p className="text-gray-600 dark:text-gray-400">Compatible with Python 3.7+</p>
                </div>
                <Link href="#">
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <Download className="h-4 w-4" />
                    <span>Download</span>
                  </Button>
                </Link>
              </div>

              <h4 className="font-medium mb-2">Installation</h4>
              <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto mb-4">
                <code>pip install fguard-sdk</code>
              </pre>

              <h4 className="font-medium mb-2">Usage Example</h4>
              <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
                <code>
                  from fguard_sdk import FGuardClient
                  <br />
                  <br /># Initialize the client
                  <br />
                  client = FGuardClient(api_key="YOUR_API_KEY")
                  <br />
                  <br /># List all rules
                  <br />
                  def list_rules():
                  <br />
                  &nbsp;&nbsp;try:
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;rules = client.rules.list()
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;print("Rules:", rules)
                  <br />
                  &nbsp;&nbsp;except Exception as e:
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;print("Error:", e)
                  <br />
                  <br /># Create a new rule
                  <br />
                  def create_rule():
                  <br />
                  &nbsp;&nbsp;try:
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;new_rule = client.rules.create(
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;name="Block SQL Injection",
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;description="Block SQL injection attempts",
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;action="block",
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;conditions=[
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"{"}
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"field": "request.uri",
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"operator": "contains",
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"value": "SELECT"
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"}"}
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;)
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;print("New rule created:", new_rule)
                  <br />
                  &nbsp;&nbsp;except Exception as e:
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;print("Error:", e)
                </code>
              </pre>
            </TabsContent>

            <TabsContent value="java" className="pt-4">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Java SDK</h3>
                  <p className="text-gray-600 dark:text-gray-400">Compatible with Java 8+</p>
                </div>
                <Link href="#">
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <Download className="h-4 w-4" />
                    <span>Download</span>
                  </Button>
                </Link>
              </div>

              <h4 className="font-medium mb-2">Installation</h4>
              <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto mb-4">
                <code>
                  // Maven
                  <br />
                  &lt;dependency&gt;
                  <br />
                  &nbsp;&nbsp;&lt;groupId&gt;com.fguard&lt;/groupId&gt;
                  <br />
                  &nbsp;&nbsp;&lt;artifactId&gt;fguard-sdk&lt;/artifactId&gt;
                  <br />
                  &nbsp;&nbsp;&lt;version&gt;1.0.0&lt;/version&gt;
                  <br />
                  &lt;/dependency&gt;
                </code>
              </pre>

              <h4 className="font-medium mb-2">Usage Example</h4>
              <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
                <code>
                  import com.fguard.sdk.FGuardClient;
                  <br />
                  import com.fguard.sdk.models.Rule;
                  <br />
                  import com.fguard.sdk.models.RuleCondition;
                  <br />
                  <br />
                  public class FGuardExample {"{"}
                  <br />
                  &nbsp;&nbsp;public static void main(String[] args) {"{"}
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;// Initialize the client
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;FGuardClient client = new FGuardClient("YOUR_API_KEY");
                  <br />
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;// List all rules
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;try {"{"}
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;List&lt;Rule&gt; rules = client.rules().list();
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.println("Rules: " + rules);
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;{"}"} catch (Exception e) {"{"}
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.err.println("Error: " + e.getMessage());
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;{"}"}
                  <br />
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;// Create a new rule
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;try {"{"}
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;RuleCondition condition = new RuleCondition();
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;condition.setField("request.uri");
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;condition.setOperator("contains");
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;condition.setValue("SELECT");
                  <br />
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rule newRule = new Rule();
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;newRule.setName("Block SQL Injection");
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;newRule.setDescription("Block SQL injection attempts");
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;newRule.setAction("block");
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;newRule.setConditions(Collections.singletonList(condition));
                  <br />
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rule createdRule = client.rules().create(newRule);
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.println("New rule created: " + createdRule);
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;{"}"} catch (Exception e) {"{"}
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.err.println("Error: " + e.getMessage());
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;{"}"}
                  <br />
                  &nbsp;&nbsp;{"}"}
                  <br />
                  {"}"}
                </code>
              </pre>
            </TabsContent>

            <TabsContent value="dotnet" className="pt-4">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">.NET SDK</h3>
                  <p className="text-gray-600 dark:text-gray-400">Compatible with .NET Standard 2.0+</p>
                </div>
                <Link href="#">
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <Download className="h-4 w-4" />
                    <span>Download</span>
                  </Button>
                </Link>
              </div>

              <h4 className="font-medium mb-2">Installation</h4>
              <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto mb-4">
                <code>dotnet add package FGuard.SDK</code>
              </pre>

              <h4 className="font-medium mb-2">Usage Example</h4>
              <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
                <code>
                  using FGuard.SDK;
                  <br />
                  using FGuard.SDK.Models;
                  <br />
                  using System;
                  <br />
                  using System.Collections.Generic;
                  <br />
                  using System.Threading.Tasks;
                  <br />
                  <br />
                  namespace FGuardExample
                  <br />
                  {"{"}
                  <br />
                  &nbsp;&nbsp;class Program
                  <br />
                  &nbsp;&nbsp;{"{"}
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;static async Task Main(string[] args)
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;{"{"}
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// Initialize the client
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;var client = new FGuardClient("YOUR_API_KEY");
                  <br />
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// List all rules
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;try
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"{"}
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;var rules = await client.Rules.ListAsync();
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Console.WriteLine($"Rules: {"{"}rules{"}"}");
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"}"}
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;catch (Exception ex)
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"{"}
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Console.WriteLine($"Error: {"{"}ex.Message{"}"}");
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"}"}
                  <br />
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// Create a new rule
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;try
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"{"}
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;var newRule = new Rule
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"{"}
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Name = "Block SQL Injection",
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Description = "Block SQL injection
                  attempts",
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Action = "block",
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Conditions = new List&lt;RuleCondition&gt;
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"{"}
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;new RuleCondition
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"{"}
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Field =
                  "request.uri",
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Operator =
                  "contains",
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Value = "SELECT"
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"}"}
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"}"}
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"}"};
                  <br />
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;var createdRule = await
                  client.Rules.CreateAsync(newRule);
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Console.WriteLine($"New rule created: {"{"}createdRule
                  {"}"}");
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"}"}
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;catch (Exception ex)
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"{"}
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Console.WriteLine($"Error: {"{"}ex.Message{"}"}");
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"}"}
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;{"}"}
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
