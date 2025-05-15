import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"

export default function ApiDocsSdk() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold mb-6">SDK Libraries</h2>
      <p className="mb-6">
        FGuard provides official SDK libraries for popular programming languages to make integration with our API even
        easier. These SDKs handle authentication, error handling, and provide a more intuitive interface for working
        with the API.
      </p>

      <Tabs defaultValue="javascript" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
          <TabsTrigger value="javascript">JavaScript</TabsTrigger>
          <TabsTrigger value="python">Python</TabsTrigger>
          <TabsTrigger value="go">Go</TabsTrigger>
          <TabsTrigger value="java">Java</TabsTrigger>
        </TabsList>

        <TabsContent value="javascript" className="mt-6 space-y-6">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4">JavaScript SDK</h3>
              <p className="mb-4">
                Our JavaScript SDK works in both Node.js and browser environments. It provides a Promise-based API for
                easy integration with modern JavaScript applications.
              </p>

              <h4 className="text-lg font-medium mb-2">Installation</h4>
              <div className="bg-slate-900 text-white rounded-lg p-4 font-mono text-sm overflow-x-auto mb-6">
                <pre>{`npm install @fguard/sdk
# or
yarn add @fguard/sdk`}</pre>
              </div>

              <h4 className="text-lg font-medium mb-2">Usage Example</h4>
              <div className="bg-slate-900 text-white rounded-lg p-4 font-mono text-sm overflow-x-auto">
                <pre>{`import { FGuardClient } from '@fguard/sdk';

// Initialize the client
const client = new FGuardClient({
  apiKey: 'YOUR_API_KEY'
});

// List all rules
async function listRules() {
  try {
    const rules = await client.rules.list();
    console.log('Rules:', rules);
    
    // Create a new rule
    const newRule = await client.rules.create({
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
    });
    
    console.log('Created rule:', newRule);
    
    // Get a specific rule
    const rule = await client.rules.get(newRule.id);
    console.log('Retrieved rule:', rule);
    
    // Update a rule
    const updatedRule = await client.rules.update(newRule.id, {
      priority: 2
    });
    
    console.log('Updated rule:', updatedRule);
    
    // Delete a rule
    await client.rules.delete(newRule.id);
    console.log('Rule deleted successfully');
    
  } catch (error) {
    console.error('Error:', error);
  }
}

listRules();`}</pre>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="python" className="mt-6 space-y-6">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4">Python SDK</h3>
              <p className="mb-4">
                Our Python SDK provides a simple and intuitive interface for interacting with the FGuard API. It
                supports Python 3.6 and above.
              </p>

              <h4 className="text-lg font-medium mb-2">Installation</h4>
              <div className="bg-slate-900 text-white rounded-lg p-4 font-mono text-sm overflow-x-auto mb-6">
                <pre>{`pip install fguard-sdk`}</pre>
              </div>

              <h4 className="text-lg font-medium mb-2">Usage Example</h4>
              <div className="bg-slate-900 text-white rounded-lg p-4 font-mono text-sm overflow-x-auto">
                <pre>{`from fguard import FGuardClient

# Initialize the client
client = FGuardClient(api_key="YOUR_API_KEY")

# List all rules
rules = client.rules.list()
print("Rules:", rules)

# Create a new rule
new_rule = client.rules.create(
    name="Block XSS Attacks",
    description="Blocks common cross-site scripting patterns",
    priority=1,
    action="block",
    conditions=[
        {
            "field": "request.headers.user-agent",
            "operator": "contains",
            "value": "script"
        }
    ]
)

print("Created rule:", new_rule)

# Get a specific rule
rule = client.rules.get(new_rule["id"])
print("Retrieved rule:", rule)

# Update a rule
updated_rule = client.rules.update(
    new_rule["id"],
    priority=2
)

print("Updated rule:", updated_rule)

# Delete a rule
client.rules.delete(new_rule["id"])
print("Rule deleted successfully")`}</pre>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="go" className="mt-6 space-y-6">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4">Go SDK</h3>
              <p className="mb-4">
                Our Go SDK provides a type-safe interface for interacting with the FGuard API. It's designed to be
                simple to use while maintaining Go's performance and safety guarantees.
              </p>

              <h4 className="text-lg font-medium mb-2">Installation</h4>
              <div className="bg-slate-900 text-white rounded-lg p-4 font-mono text-sm overflow-x-auto mb-6">
                <pre>{`go get github.com/fguard/fguard-go`}</pre>
              </div>

              <h4 className="text-lg font-medium mb-2">Usage Example</h4>
              <div className="bg-slate-900 text-white rounded-lg p-4 font-mono text-sm overflow-x-auto">
                <pre>{`package main

import (
    "fmt"
    "log"

    "github.com/fguard/fguard-go"
)

func main() {
    // Initialize the client
    client := fguard.NewClient("YOUR_API_KEY")

    // List all rules
    rules, err := client.Rules.List()
    if err != nil {
        log.Fatalf("Error listing rules: %v", err)
    }
    fmt.Println("Rules:", rules)

    // Create a new rule
    condition := fguard.Condition{
        Field:    "request.headers.user-agent",
        Operator: "contains",
        Value:    "script",
    }

    newRule, err := client.Rules.Create(&fguard.Rule{
        Name:        "Block XSS Attacks",
        Description: "Blocks common cross-site scripting patterns",
        Priority:    1,
        Action:      "block",
        Conditions:  []fguard.Condition{condition},
    })
    if err != nil {
        log.Fatalf("Error creating rule: %v", err)
    }
    fmt.Println("Created rule:", newRule)

    // Get a specific rule
    rule, err := client.Rules.Get(newRule.ID)
    if err != nil {
        log.Fatalf("Error getting rule: %v", err)
    }
    fmt.Println("Retrieved rule:", rule)

    // Update a rule
    newRule.Priority = 2
    updatedRule, err := client.Rules.Update(newRule.ID, newRule)
    if err != nil {
        log.Fatalf("Error updating rule: %v", err)
    }
    fmt.Println("Updated rule:", updatedRule)

    // Delete a rule
    err = client.Rules.Delete(newRule.ID)
    if err != nil {
        log.Fatalf("Error deleting rule: %v", err)
    }
    fmt.Println("Rule deleted successfully")
}`}</pre>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="java" className="mt-6 space-y-6">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4">Java SDK</h3>
              <p className="mb-4">
                Our Java SDK provides a comprehensive interface for interacting with the FGuard API. It's designed for
                enterprise applications and supports Java 8 and above.
              </p>

              <h4 className="text-lg font-medium mb-2">Installation</h4>
              <div className="bg-slate-900 text-white rounded-lg p-4 font-mono text-sm overflow-x-auto mb-6">
                <pre>{`<!-- Maven -->
<dependency>
    <groupId>com.fguard</groupId>
    <artifactId>fguard-sdk</artifactId>
    <version>1.0.0</version>
</dependency>

<!-- Gradle -->
implementation 'com.fguard:fguard-sdk:1.0.0'`}</pre>
              </div>

              <h4 className="text-lg font-medium mb-2">Usage Example</h4>
              <div className="bg-slate-900 text-white rounded-lg p-4 font-mono text-sm overflow-x-auto">
                <pre>{`import com.fguard.FGuardClient;
import com.fguard.models.Condition;
import com.fguard.models.Rule;
import com.fguard.exceptions.FGuardException;

import java.util.Arrays;
import java.util.List;

public class FGuardExample {
    public static void main(String[] args) {
        // Initialize the client
        FGuardClient client = new FGuardClient("YOUR_API_KEY");

        try {
            // List all rules
            List<Rule> rules = client.rules().list();
            System.out.println("Rules: " + rules);

            // Create a new rule
            Condition condition = new Condition()
                .setField("request.headers.user-agent")
                .setOperator("contains")
                .setValue("script");

            Rule newRule = new Rule()
                .setName("Block XSS Attacks")
                .setDescription("Blocks common cross-site scripting patterns")
                .setPriority(1)
                .setAction("block")
                .setConditions(Arrays.asList(condition));

            Rule createdRule = client.rules().create(newRule);
            System.out.println("Created rule: " + createdRule);

            // Get a specific rule
            Rule rule = client.rules().get(createdRule.getId());
            System.out.println("Retrieved rule: " + rule);

            // Update a rule
            createdRule.setPriority(2);
            Rule updatedRule = client.rules().update(createdRule.getId(), createdRule);
            System.out.println("Updated rule: " + updatedRule);

            // Delete a rule
            client.rules().delete(createdRule.getId());
            System.out.println("Rule deleted successfully");

        } catch (FGuardException e) {
            System.err.println("Error: " + e.getMessage());
        }
    }
}`}</pre>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
