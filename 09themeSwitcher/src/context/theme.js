import { createContext, useContext } from "react";
// in create context you can pass initial context 
// when the  context loads for the first time what inital state 
// do you want to performe
export const ThemeContext = createContext({
    themeMode:"ligit",
    darkTheme: ()=>{},
    ligitTheme: ()=>{}
});

export const ThemeProvider = ThemeContext.Provider;

export default function useTheme(){
    return useContext(ThemeContext);
}