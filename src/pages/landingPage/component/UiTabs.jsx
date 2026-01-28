import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Alert, AlertDescription } from "@/components/ui/alert"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage } from "@/components/ui/breadcrumb"

export default function UiTabs() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="mb-6 text-3xl font-bold">UI Components Playground</h1>

      <Tabs defaultValue="buttons" className="w-full">
        <TabsList className="flex flex-wrap">
          <TabsTrigger value="buttons">Buttons</TabsTrigger>
          <TabsTrigger value="forms">Forms</TabsTrigger>
          <TabsTrigger value="feedback">Feedback</TabsTrigger>
          <TabsTrigger value="data">Data</TabsTrigger>
          <TabsTrigger value="layout">Layout</TabsTrigger>
          <TabsTrigger value="controls">Controls</TabsTrigger>
          <TabsTrigger value="navigation">Navigation</TabsTrigger>
        </TabsList>

        {/* BUTTONS */}
        <TabsContent value="buttons" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Buttons</CardTitle>
            </CardHeader>
            <CardContent className="space-x-2">
              <Button>Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="destructive">Destructive</Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* FORMS */}
        <TabsContent value="forms" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Form Inputs</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Input placeholder="Name" />
              <Input placeholder="Email" />
            </CardContent>
          </Card>
        </TabsContent>

        {/* FEEDBACK */}
        <TabsContent value="feedback" className="mt-6 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Alerts</CardTitle>
            </CardHeader>
            <CardContent>
              <Alert>
                <AlertDescription>
                  This is a default alert
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </TabsContent>

        {/* DATA */}
        <TabsContent value="data" className="mt-6 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Badges</CardTitle>
            </CardHeader>
            <CardContent className="space-x-2">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="outline">Outline</Badge>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Table</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Role</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>John</TableCell>
                    <TableCell>Admin</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Jane</TableCell>
                    <TableCell>User</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* LAYOUT */}
        <TabsContent value="layout" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Layout Helpers</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>Content above</div>
              <Separator />
              <div>Content below</div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* CONTROLS */}
        <TabsContent value="controls" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Switch</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center gap-4">
              <span>Enable feature</span>
              <Switch />
            </CardContent>
          </Card>
        </TabsContent>

        {/* NAVIGATION */}
        <TabsContent value="navigation" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Breadcrumb</CardTitle>
            </CardHeader>
            <CardContent>
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>Home</BreadcrumbItem>
                  <BreadcrumbItem>UI</BreadcrumbItem>
                  <BreadcrumbPage>Components</BreadcrumbPage>
                </BreadcrumbList>
              </Breadcrumb>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
