import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SignInTab } from "../_components/sign-in-tab";
import { SignUpTab } from "../_components/sign-up-tab";

const Login = () => {
  return (
    <Tabs defaultValue="signin" >
      <TabsList className="light-border background-light800_dark200 shadow-light100_dark100">
        <TabsTrigger value="signin">Sign In</TabsTrigger>
        <TabsTrigger value="signup">Sign Up</TabsTrigger>
      </TabsList>
      <TabsContent value="signin">
        <Card className="light-border background-light800_dark200 shadow-light100_dark100">
          <CardContent>
            {/* Sign In form */}
            <SignInTab />
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="signup">
        <Card className="light-border background-light800_dark200 shadow-light100_dark100">
          <CardContent>
            {/* Sign Up form */}
            <SignUpTab />
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default Login;
