import { NavigationContainer } from "@react-navigation/native";

import { StackRoutes } from "./stack.routes";
import { BottomTabsRoutes } from "./bottom-tabs.routes";

export function Routes(){
    return(
        <NavigationContainer>
            <StackRoutes />
        </NavigationContainer>
    );
};