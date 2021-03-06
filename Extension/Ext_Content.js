
window.addEventListener("load", e => {

    function AddScript(scriptFileName) {
        var script = document.createElement('script');
        script.src = chrome.runtime.getURL(scriptFileName);
        return document.head.appendChild(script);
    }
    
    AddScript("Utils.js");
    AddScript("CursedPublic/CP_Activators.js");
    AddScript("CursedPublic/CP_Helpers.js");
    AddScript("CursedPublic/CP_LongStrings.js");
    AddScript("CursedPublic/CP_MainCurse.js");
    AddScript("CursedPublic/CP_MessageCheck.js");
    AddScript("CursedPublic/CP_PunishmentCheck.js");
    AddScript("CursedPublic/CP_AppearanceCheck.js");
    AddScript("CursedPublic/CP_FuncOwner.js");
    AddScript("CursedPublic/CP_FuncMistress.js");
    AddScript("CursedPublic/CP_FuncPublic.js");
    AddScript("CursedPublic/CP_FuncWearer.js");
});