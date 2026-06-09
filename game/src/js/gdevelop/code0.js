gdjs.Cena_32sem_32t_237tuloCode = {};
gdjs.Cena_32sem_32t_237tuloCode.localVariables = [];
gdjs.Cena_32sem_32t_237tuloCode.idToCallbackMap = new Map();
gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1= [];
gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects2= [];
gdjs.Cena_32sem_32t_237tuloCode.GDmapaObjects1= [];
gdjs.Cena_32sem_32t_237tuloCode.GDmapaObjects2= [];
gdjs.Cena_32sem_32t_237tuloCode.GD_9595CasteloSaaSObjects1= [];
gdjs.Cena_32sem_32t_237tuloCode.GD_9595CasteloSaaSObjects2= [];
gdjs.Cena_32sem_32t_237tuloCode.GDfase1Objects1= [];
gdjs.Cena_32sem_32t_237tuloCode.GDfase1Objects2= [];
gdjs.Cena_32sem_32t_237tuloCode.GDfase2Objects1= [];
gdjs.Cena_32sem_32t_237tuloCode.GDfase2Objects2= [];
gdjs.Cena_32sem_32t_237tuloCode.GDfase3Objects1= [];
gdjs.Cena_32sem_32t_237tuloCode.GDfase3Objects2= [];
gdjs.Cena_32sem_32t_237tuloCode.GDfase4Objects1= [];
gdjs.Cena_32sem_32t_237tuloCode.GDfase4Objects2= [];
gdjs.Cena_32sem_32t_237tuloCode.GDfase5Objects1= [];
gdjs.Cena_32sem_32t_237tuloCode.GDfase5Objects2= [];
gdjs.Cena_32sem_32t_237tuloCode.GDfase6Objects1= [];
gdjs.Cena_32sem_32t_237tuloCode.GDfase6Objects2= [];
gdjs.Cena_32sem_32t_237tuloCode.GDhomeObjects1= [];
gdjs.Cena_32sem_32t_237tuloCode.GDhomeObjects2= [];
gdjs.Cena_32sem_32t_237tuloCode.GDcurva1Objects1= [];
gdjs.Cena_32sem_32t_237tuloCode.GDcurva1Objects2= [];
gdjs.Cena_32sem_32t_237tuloCode.GDcurva2Objects1= [];
gdjs.Cena_32sem_32t_237tuloCode.GDcurva2Objects2= [];
gdjs.Cena_32sem_32t_237tuloCode.GDcurva3Objects1= [];
gdjs.Cena_32sem_32t_237tuloCode.GDcurva3Objects2= [];
gdjs.Cena_32sem_32t_237tuloCode.GDcurva4Objects1= [];
gdjs.Cena_32sem_32t_237tuloCode.GDcurva4Objects2= [];
gdjs.Cena_32sem_32t_237tuloCode.GDcurva5Objects1= [];
gdjs.Cena_32sem_32t_237tuloCode.GDcurva5Objects2= [];


gdjs.Cena_32sem_32t_237tuloCode.mapOfGDgdjs_9546Cena_959532sem_959532t_9595237tuloCode_9546GDfase1Objects1Objects = Hashtable.newFrom({"fase1": gdjs.Cena_32sem_32t_237tuloCode.GDfase1Objects1});
gdjs.Cena_32sem_32t_237tuloCode.mapOfGDgdjs_9546Cena_959532sem_959532t_9595237tuloCode_9546GDhomeObjects1Objects = Hashtable.newFrom({"home": gdjs.Cena_32sem_32t_237tuloCode.GDhomeObjects1});
gdjs.Cena_32sem_32t_237tuloCode.mapOfGDgdjs_9546Cena_959532sem_959532t_9595237tuloCode_9546GDfase2Objects1Objects = Hashtable.newFrom({"fase2": gdjs.Cena_32sem_32t_237tuloCode.GDfase2Objects1});
gdjs.Cena_32sem_32t_237tuloCode.mapOfGDgdjs_9546Cena_959532sem_959532t_9595237tuloCode_9546GDfase1Objects1Objects = Hashtable.newFrom({"fase1": gdjs.Cena_32sem_32t_237tuloCode.GDfase1Objects1});
gdjs.Cena_32sem_32t_237tuloCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Lucas"), gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1);
gdjs.copyArray(runtimeScene.getObjects("fase1"), gdjs.Cena_32sem_32t_237tuloCode.GDfase1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Cena_32sem_32t_237tuloCode.mapOfGDgdjs_9546Cena_959532sem_959532t_9595237tuloCode_9546GDfase1Objects1Objects, runtimeScene, false, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length;i<l;++i) {
    if ( gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].hasNoForces() ) {
        isConditionTrue_0 = true;
        gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[k] = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i];
        ++k;
    }
}
gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length;i<l;++i) {
    if ( gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariableNumber(gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariables().getFromIndex(4)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[k] = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i];
        ++k;
    }
}
gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length = k;
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1 */
/* Reuse gdjs.Cena_32sem_32t_237tuloCode.GDfase1Objects1 */
{for(var i = 0, len = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length ;i < len;++i) {
    gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].returnVariable(gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariables().getFromIndex(2)).setBoolean(true);
}
}
{for(var i = 0, len = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length ;i < len;++i) {
    gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].returnVariable(gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariables().getFromIndex(5)).setString("fase1");
}
}
{for(var i = 0, len = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length ;i < len;++i) {
    gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].returnVariable(gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariables().getFromIndex(0)).setNumber((( gdjs.Cena_32sem_32t_237tuloCode.GDfase1Objects1.length === 0 ) ? 0 :gdjs.Cena_32sem_32t_237tuloCode.GDfase1Objects1[0].getCenterXInScene()) - (gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getWidth()) / 2);
}
}
{for(var i = 0, len = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length ;i < len;++i) {
    gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].returnVariable(gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariables().getFromIndex(1)).setNumber((( gdjs.Cena_32sem_32t_237tuloCode.GDfase1Objects1.length === 0 ) ? 0 :gdjs.Cena_32sem_32t_237tuloCode.GDfase1Objects1[0].getCenterYInScene()) - (gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getHeight()) / 2 - 10);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Lucas"), gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1);
gdjs.copyArray(runtimeScene.getObjects("home"), gdjs.Cena_32sem_32t_237tuloCode.GDhomeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Cena_32sem_32t_237tuloCode.mapOfGDgdjs_9546Cena_959532sem_959532t_9595237tuloCode_9546GDhomeObjects1Objects, runtimeScene, false, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length;i<l;++i) {
    if ( gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].hasNoForces() ) {
        isConditionTrue_0 = true;
        gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[k] = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i];
        ++k;
    }
}
gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1 */
/* Reuse gdjs.Cena_32sem_32t_237tuloCode.GDhomeObjects1 */
{for(var i = 0, len = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length ;i < len;++i) {
    gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].returnVariable(gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariables().getFromIndex(2)).setBoolean(true);
}
}
{for(var i = 0, len = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length ;i < len;++i) {
    gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].returnVariable(gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariables().getFromIndex(5)).setString("home");
}
}
{for(var i = 0, len = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length ;i < len;++i) {
    gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].returnVariable(gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariables().getFromIndex(0)).setNumber((( gdjs.Cena_32sem_32t_237tuloCode.GDhomeObjects1.length === 0 ) ? 0 :gdjs.Cena_32sem_32t_237tuloCode.GDhomeObjects1[0].getCenterXInScene()) - (gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getWidth()) / 2);
}
}
{for(var i = 0, len = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length ;i < len;++i) {
    gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].returnVariable(gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariables().getFromIndex(1)).setNumber((( gdjs.Cena_32sem_32t_237tuloCode.GDhomeObjects1.length === 0 ) ? 0 :gdjs.Cena_32sem_32t_237tuloCode.GDhomeObjects1[0].getCenterYInScene()) - (gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getHeight()) / 2 - 10);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Lucas"), gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length;i<l;++i) {
    if ( gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariableBoolean(gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariables().getFromIndex(2), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[k] = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i];
        ++k;
    }
}
gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length;i<l;++i) {
    if ( gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariableString(gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariables().getFromIndex(5)) == "home" ) {
        isConditionTrue_0 = true;
        gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[k] = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i];
        ++k;
    }
}
gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1 */
{for(var i = 0, len = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length ;i < len;++i) {
    gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getBehavior("Animation").setAnimationName("lucas-costas");
}
}
{for(var i = 0, len = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length ;i < len;++i) {
    gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getBehavior("Pathfinding").moveTo(runtimeScene, (gdjs.RuntimeObject.getVariableNumber(gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariables().getFromIndex(0))), (gdjs.RuntimeObject.getVariableNumber(gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariables().getFromIndex(1))));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Lucas"), gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length;i<l;++i) {
    if ( gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariableBoolean(gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariables().getFromIndex(2), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[k] = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i];
        ++k;
    }
}
gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length;i<l;++i) {
    if ( gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariableString(gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariables().getFromIndex(5)) == "fase1" ) {
        isConditionTrue_0 = true;
        gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[k] = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i];
        ++k;
    }
}
gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1 */
{for(var i = 0, len = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length ;i < len;++i) {
    gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getBehavior("Animation").setAnimationName("lucas-frente");
}
}
{for(var i = 0, len = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length ;i < len;++i) {
    gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getBehavior("Pathfinding").moveTo(runtimeScene, (gdjs.RuntimeObject.getVariableNumber(gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariables().getFromIndex(0))), (gdjs.RuntimeObject.getVariableNumber(gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariables().getFromIndex(1))));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Lucas"), gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length;i<l;++i) {
    if ( gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariableBoolean(gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariables().getFromIndex(2), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[k] = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i];
        ++k;
    }
}
gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length;i<l;++i) {
    if ( gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariableString(gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariables().getFromIndex(5)) == "fase1" ) {
        isConditionTrue_0 = true;
        gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[k] = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i];
        ++k;
    }
}
gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.common.distanceBetweenPositions((( gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length === 0 ) ? 0 :gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[0].getPointX("")), (( gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length === 0 ) ? 0 :gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[0].getPointY("")), (gdjs.RuntimeObject.getVariableNumber(((gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[0].getVariables()).getFromIndex(0))), (gdjs.RuntimeObject.getVariableNumber(((gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[0].getVariables()).getFromIndex(1)))) < 10);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1 */
{for(var i = 0, len = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length ;i < len;++i) {
    gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].returnVariable(gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariables().getFromIndex(2)).setBoolean(false);
}
}
{for(var i = 0, len = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length ;i < len;++i) {
    gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getBehavior("Animation").setAnimationName("lucas-parado");
}
}
{for(var i = 0, len = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length ;i < len;++i) {
    gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].returnVariable(gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariables().getFromIndex(4)).setNumber(1);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Lucas"), gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length;i<l;++i) {
    if ( gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariableBoolean(gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariables().getFromIndex(2), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[k] = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i];
        ++k;
    }
}
gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length;i<l;++i) {
    if ( gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariableString(gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariables().getFromIndex(5)) == "home" ) {
        isConditionTrue_0 = true;
        gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[k] = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i];
        ++k;
    }
}
gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.common.distanceBetweenPositions((( gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length === 0 ) ? 0 :gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[0].getPointX("")), (( gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length === 0 ) ? 0 :gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[0].getPointY("")), (gdjs.RuntimeObject.getVariableNumber(((gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[0].getVariables()).getFromIndex(0))), (gdjs.RuntimeObject.getVariableNumber(((gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[0].getVariables()).getFromIndex(1)))) < 10);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1 */
{for(var i = 0, len = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length ;i < len;++i) {
    gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].returnVariable(gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariables().getFromIndex(2)).setBoolean(false);
}
}
{for(var i = 0, len = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length ;i < len;++i) {
    gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getBehavior("Animation").setAnimationName("lucas-parado");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Lucas"), gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1);
gdjs.copyArray(runtimeScene.getObjects("fase2"), gdjs.Cena_32sem_32t_237tuloCode.GDfase2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Cena_32sem_32t_237tuloCode.mapOfGDgdjs_9546Cena_959532sem_959532t_9595237tuloCode_9546GDfase2Objects1Objects, runtimeScene, false, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length;i<l;++i) {
    if ( gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].hasNoForces() ) {
        isConditionTrue_0 = true;
        gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[k] = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i];
        ++k;
    }
}
gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length;i<l;++i) {
    if ( gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariableNumber(gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariables().getFromIndex(4)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[k] = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i];
        ++k;
    }
}
gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length = k;
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1 */
gdjs.copyArray(runtimeScene.getObjects("curva1"), gdjs.Cena_32sem_32t_237tuloCode.GDcurva1Objects1);
{for(var i = 0, len = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length ;i < len;++i) {
    gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].returnVariable(gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariables().getFromIndex(2)).setBoolean(true);
}
}
{for(var i = 0, len = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length ;i < len;++i) {
    gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].returnVariable(gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariables().getFromIndex(5)).setString("curva1");
}
}
{for(var i = 0, len = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length ;i < len;++i) {
    gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].returnVariable(gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariables().getFromIndex(0)).setNumber((( gdjs.Cena_32sem_32t_237tuloCode.GDcurva1Objects1.length === 0 ) ? 0 :gdjs.Cena_32sem_32t_237tuloCode.GDcurva1Objects1[0].getCenterXInScene()) - (gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getWidth()) / 2);
}
}
{for(var i = 0, len = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length ;i < len;++i) {
    gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].returnVariable(gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariables().getFromIndex(1)).setNumber((( gdjs.Cena_32sem_32t_237tuloCode.GDcurva1Objects1.length === 0 ) ? 0 :gdjs.Cena_32sem_32t_237tuloCode.GDcurva1Objects1[0].getCenterYInScene()) - (gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getHeight()) / 2 - 30);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Lucas"), gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length;i<l;++i) {
    if ( gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariableBoolean(gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariables().getFromIndex(2), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[k] = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i];
        ++k;
    }
}
gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length;i<l;++i) {
    if ( gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariableString(gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariables().getFromIndex(5)) == "curva1" ) {
        isConditionTrue_0 = true;
        gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[k] = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i];
        ++k;
    }
}
gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1 */
{for(var i = 0, len = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length ;i < len;++i) {
    gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getBehavior("Animation").setAnimationName("lucas-direita");
}
}
{for(var i = 0, len = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length ;i < len;++i) {
    gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getBehavior("Pathfinding").moveTo(runtimeScene, (gdjs.RuntimeObject.getVariableNumber(gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariables().getFromIndex(0))), (gdjs.RuntimeObject.getVariableNumber(gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariables().getFromIndex(1))));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Lucas"), gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length;i<l;++i) {
    if ( gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariableBoolean(gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariables().getFromIndex(2), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[k] = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i];
        ++k;
    }
}
gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length;i<l;++i) {
    if ( gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariableString(gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariables().getFromIndex(5)) == "curva1" ) {
        isConditionTrue_0 = true;
        gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[k] = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i];
        ++k;
    }
}
gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.common.distanceBetweenPositions((( gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length === 0 ) ? 0 :gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[0].getCenterXInScene()), (( gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length === 0 ) ? 0 :gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[0].getCenterYInScene()), (gdjs.RuntimeObject.getVariableNumber(((gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[0].getVariables()).getFromIndex(0))) + (( gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length === 0 ) ? 0 :gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[0].getWidth()) / 2, (gdjs.RuntimeObject.getVariableNumber(((gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[0].getVariables()).getFromIndex(1))) + (( gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length === 0 ) ? 0 :gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[0].getHeight()) / 2) < 5);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1 */
gdjs.copyArray(runtimeScene.getObjects("curva2"), gdjs.Cena_32sem_32t_237tuloCode.GDcurva2Objects1);
{for(var i = 0, len = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length ;i < len;++i) {
    gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].returnVariable(gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariables().getFromIndex(5)).setString("curva2");
}
}
{for(var i = 0, len = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length ;i < len;++i) {
    gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].returnVariable(gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariables().getFromIndex(0)).setNumber((( gdjs.Cena_32sem_32t_237tuloCode.GDcurva2Objects1.length === 0 ) ? 0 :gdjs.Cena_32sem_32t_237tuloCode.GDcurva2Objects1[0].getCenterXInScene()) - (gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getWidth()) / 2);
}
}
{for(var i = 0, len = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length ;i < len;++i) {
    gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].returnVariable(gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariables().getFromIndex(1)).setNumber((( gdjs.Cena_32sem_32t_237tuloCode.GDcurva2Objects1.length === 0 ) ? 0 :gdjs.Cena_32sem_32t_237tuloCode.GDcurva2Objects1[0].getCenterYInScene()) - (gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getHeight()) / 2 - 20);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Lucas"), gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length;i<l;++i) {
    if ( gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariableBoolean(gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariables().getFromIndex(2), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[k] = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i];
        ++k;
    }
}
gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length;i<l;++i) {
    if ( gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariableString(gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariables().getFromIndex(5)) == "curva2" ) {
        isConditionTrue_0 = true;
        gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[k] = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i];
        ++k;
    }
}
gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1 */
{for(var i = 0, len = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length ;i < len;++i) {
    gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getBehavior("Animation").setAnimationName("lucas-direita");
}
}
{for(var i = 0, len = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length ;i < len;++i) {
    gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getBehavior("Pathfinding").moveTo(runtimeScene, (gdjs.RuntimeObject.getVariableNumber(gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariables().getFromIndex(0))), (gdjs.RuntimeObject.getVariableNumber(gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariables().getFromIndex(1))));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Lucas"), gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length;i<l;++i) {
    if ( gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariableBoolean(gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariables().getFromIndex(2), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[k] = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i];
        ++k;
    }
}
gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length;i<l;++i) {
    if ( gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariableString(gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariables().getFromIndex(5)) == "curva2" ) {
        isConditionTrue_0 = true;
        gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[k] = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i];
        ++k;
    }
}
gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.common.distanceBetweenPositions((( gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length === 0 ) ? 0 :gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[0].getCenterXInScene()), (( gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length === 0 ) ? 0 :gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[0].getCenterYInScene()), (gdjs.RuntimeObject.getVariableNumber(((gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[0].getVariables()).getFromIndex(0))) + (( gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length === 0 ) ? 0 :gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[0].getWidth()) / 2, (gdjs.RuntimeObject.getVariableNumber(((gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[0].getVariables()).getFromIndex(1))) + (( gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length === 0 ) ? 0 :gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[0].getHeight()) / 2) < 5);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1 */
gdjs.copyArray(runtimeScene.getObjects("curva3"), gdjs.Cena_32sem_32t_237tuloCode.GDcurva3Objects1);
{for(var i = 0, len = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length ;i < len;++i) {
    gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].returnVariable(gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariables().getFromIndex(5)).setString("curva3");
}
}
{for(var i = 0, len = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length ;i < len;++i) {
    gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].returnVariable(gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariables().getFromIndex(0)).setNumber((( gdjs.Cena_32sem_32t_237tuloCode.GDcurva3Objects1.length === 0 ) ? 0 :gdjs.Cena_32sem_32t_237tuloCode.GDcurva3Objects1[0].getCenterXInScene()) - (gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getWidth()) / 2);
}
}
{for(var i = 0, len = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length ;i < len;++i) {
    gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].returnVariable(gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariables().getFromIndex(1)).setNumber((( gdjs.Cena_32sem_32t_237tuloCode.GDcurva3Objects1.length === 0 ) ? 0 :gdjs.Cena_32sem_32t_237tuloCode.GDcurva3Objects1[0].getCenterYInScene()) - (gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getHeight()) / 2 - 20);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Lucas"), gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length;i<l;++i) {
    if ( gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariableBoolean(gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariables().getFromIndex(2), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[k] = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i];
        ++k;
    }
}
gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length;i<l;++i) {
    if ( gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariableString(gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariables().getFromIndex(5)) == "curva3" ) {
        isConditionTrue_0 = true;
        gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[k] = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i];
        ++k;
    }
}
gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1 */
{for(var i = 0, len = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length ;i < len;++i) {
    gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getBehavior("Animation").setAnimationName("lucas-frente");
}
}
{for(var i = 0, len = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length ;i < len;++i) {
    gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getBehavior("Pathfinding").moveTo(runtimeScene, (gdjs.RuntimeObject.getVariableNumber(gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariables().getFromIndex(0))), (gdjs.RuntimeObject.getVariableNumber(gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariables().getFromIndex(1))));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Lucas"), gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length;i<l;++i) {
    if ( gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariableBoolean(gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariables().getFromIndex(2), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[k] = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i];
        ++k;
    }
}
gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length;i<l;++i) {
    if ( gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariableString(gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariables().getFromIndex(5)) == "curva3" ) {
        isConditionTrue_0 = true;
        gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[k] = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i];
        ++k;
    }
}
gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.common.distanceBetweenPositions((( gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length === 0 ) ? 0 :gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[0].getCenterXInScene()), (( gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length === 0 ) ? 0 :gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[0].getCenterYInScene()), (gdjs.RuntimeObject.getVariableNumber(((gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[0].getVariables()).getFromIndex(0))) + (( gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length === 0 ) ? 0 :gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[0].getWidth()) / 2, (gdjs.RuntimeObject.getVariableNumber(((gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[0].getVariables()).getFromIndex(1))) + (( gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length === 0 ) ? 0 :gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[0].getHeight()) / 2) < 5);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1 */
gdjs.copyArray(runtimeScene.getObjects("curva4"), gdjs.Cena_32sem_32t_237tuloCode.GDcurva4Objects1);
{for(var i = 0, len = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length ;i < len;++i) {
    gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].returnVariable(gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariables().getFromIndex(5)).setString("curva4");
}
}
{for(var i = 0, len = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length ;i < len;++i) {
    gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].returnVariable(gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariables().getFromIndex(0)).setNumber((( gdjs.Cena_32sem_32t_237tuloCode.GDcurva4Objects1.length === 0 ) ? 0 :gdjs.Cena_32sem_32t_237tuloCode.GDcurva4Objects1[0].getCenterXInScene()) - (gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getWidth()) / 2);
}
}
{for(var i = 0, len = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length ;i < len;++i) {
    gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].returnVariable(gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariables().getFromIndex(1)).setNumber((( gdjs.Cena_32sem_32t_237tuloCode.GDcurva4Objects1.length === 0 ) ? 0 :gdjs.Cena_32sem_32t_237tuloCode.GDcurva4Objects1[0].getCenterYInScene()) - (gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getHeight()) / 2 - 10);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Lucas"), gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length;i<l;++i) {
    if ( gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariableBoolean(gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariables().getFromIndex(2), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[k] = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i];
        ++k;
    }
}
gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length;i<l;++i) {
    if ( gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariableString(gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariables().getFromIndex(5)) == "curva4" ) {
        isConditionTrue_0 = true;
        gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[k] = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i];
        ++k;
    }
}
gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1 */
{for(var i = 0, len = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length ;i < len;++i) {
    gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getBehavior("Animation").setAnimationName("lucas-frente");
}
}
{for(var i = 0, len = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length ;i < len;++i) {
    gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getBehavior("Pathfinding").moveTo(runtimeScene, (gdjs.RuntimeObject.getVariableNumber(gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariables().getFromIndex(0))), (gdjs.RuntimeObject.getVariableNumber(gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariables().getFromIndex(1))));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Lucas"), gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length;i<l;++i) {
    if ( gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariableBoolean(gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariables().getFromIndex(2), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[k] = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i];
        ++k;
    }
}
gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length;i<l;++i) {
    if ( gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariableString(gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariables().getFromIndex(5)) == "curva4" ) {
        isConditionTrue_0 = true;
        gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[k] = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i];
        ++k;
    }
}
gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.common.distanceBetweenPositions((( gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length === 0 ) ? 0 :gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[0].getCenterXInScene()), (( gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length === 0 ) ? 0 :gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[0].getCenterYInScene()), (gdjs.RuntimeObject.getVariableNumber(((gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[0].getVariables()).getFromIndex(0))) + (( gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length === 0 ) ? 0 :gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[0].getWidth()) / 2, (gdjs.RuntimeObject.getVariableNumber(((gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[0].getVariables()).getFromIndex(1))) + (( gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length === 0 ) ? 0 :gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[0].getHeight()) / 2) < 10);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1 */
gdjs.copyArray(runtimeScene.getObjects("curva5"), gdjs.Cena_32sem_32t_237tuloCode.GDcurva5Objects1);
{for(var i = 0, len = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length ;i < len;++i) {
    gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].returnVariable(gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariables().getFromIndex(5)).setString("curva5");
}
}
{for(var i = 0, len = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length ;i < len;++i) {
    gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].returnVariable(gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariables().getFromIndex(0)).setNumber((( gdjs.Cena_32sem_32t_237tuloCode.GDcurva5Objects1.length === 0 ) ? 0 :gdjs.Cena_32sem_32t_237tuloCode.GDcurva5Objects1[0].getCenterXInScene()) - (gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getWidth()) / 2);
}
}
{for(var i = 0, len = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length ;i < len;++i) {
    gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].returnVariable(gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariables().getFromIndex(1)).setNumber((( gdjs.Cena_32sem_32t_237tuloCode.GDcurva5Objects1.length === 0 ) ? 0 :gdjs.Cena_32sem_32t_237tuloCode.GDcurva5Objects1[0].getCenterYInScene()) - (gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getHeight()) / 2 - 10);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Lucas"), gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length;i<l;++i) {
    if ( gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariableBoolean(gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariables().getFromIndex(2), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[k] = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i];
        ++k;
    }
}
gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length;i<l;++i) {
    if ( gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariableString(gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariables().getFromIndex(5)) == "curva5" ) {
        isConditionTrue_0 = true;
        gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[k] = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i];
        ++k;
    }
}
gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1 */
{for(var i = 0, len = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length ;i < len;++i) {
    gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getBehavior("Animation").setAnimationName("lucas-frente");
}
}
{for(var i = 0, len = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length ;i < len;++i) {
    gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getBehavior("Pathfinding").moveTo(runtimeScene, (gdjs.RuntimeObject.getVariableNumber(gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariables().getFromIndex(0))), (gdjs.RuntimeObject.getVariableNumber(gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariables().getFromIndex(1))));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Lucas"), gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length;i<l;++i) {
    if ( gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariableBoolean(gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariables().getFromIndex(2), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[k] = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i];
        ++k;
    }
}
gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length;i<l;++i) {
    if ( gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariableString(gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariables().getFromIndex(5)) == "curva5" ) {
        isConditionTrue_0 = true;
        gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[k] = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i];
        ++k;
    }
}
gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.common.distanceBetweenPositions((( gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length === 0 ) ? 0 :gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[0].getCenterXInScene()), (( gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length === 0 ) ? 0 :gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[0].getCenterYInScene()), (gdjs.RuntimeObject.getVariableNumber(((gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[0].getVariables()).getFromIndex(0))) + (( gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length === 0 ) ? 0 :gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[0].getWidth()) / 2, (gdjs.RuntimeObject.getVariableNumber(((gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[0].getVariables()).getFromIndex(1))) + (( gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length === 0 ) ? 0 :gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[0].getHeight()) / 2) < 10);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1 */
gdjs.copyArray(runtimeScene.getObjects("fase2"), gdjs.Cena_32sem_32t_237tuloCode.GDfase2Objects1);
{for(var i = 0, len = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length ;i < len;++i) {
    gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].returnVariable(gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariables().getFromIndex(5)).setString("fase2");
}
}
{for(var i = 0, len = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length ;i < len;++i) {
    gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].returnVariable(gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariables().getFromIndex(0)).setNumber((( gdjs.Cena_32sem_32t_237tuloCode.GDfase2Objects1.length === 0 ) ? 0 :gdjs.Cena_32sem_32t_237tuloCode.GDfase2Objects1[0].getCenterXInScene()) - (gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getWidth()) / 2);
}
}
{for(var i = 0, len = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length ;i < len;++i) {
    gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].returnVariable(gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariables().getFromIndex(1)).setNumber((( gdjs.Cena_32sem_32t_237tuloCode.GDfase2Objects1.length === 0 ) ? 0 :gdjs.Cena_32sem_32t_237tuloCode.GDfase2Objects1[0].getCenterYInScene()) - (gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getHeight()) / 2 - 20);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Lucas"), gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length;i<l;++i) {
    if ( gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariableBoolean(gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariables().getFromIndex(2), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[k] = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i];
        ++k;
    }
}
gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length;i<l;++i) {
    if ( gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariableString(gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariables().getFromIndex(5)) == "fase2" ) {
        isConditionTrue_0 = true;
        gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[k] = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i];
        ++k;
    }
}
gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1 */
{for(var i = 0, len = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length ;i < len;++i) {
    gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getBehavior("Animation").setAnimationName("lucas-frente");
}
}
{for(var i = 0, len = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length ;i < len;++i) {
    gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getBehavior("Pathfinding").moveTo(runtimeScene, (gdjs.RuntimeObject.getVariableNumber(gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariables().getFromIndex(0))), (gdjs.RuntimeObject.getVariableNumber(gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariables().getFromIndex(1))));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Lucas"), gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length;i<l;++i) {
    if ( gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariableBoolean(gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariables().getFromIndex(2), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[k] = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i];
        ++k;
    }
}
gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length;i<l;++i) {
    if ( gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariableString(gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariables().getFromIndex(5)) == "fase2" ) {
        isConditionTrue_0 = true;
        gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[k] = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i];
        ++k;
    }
}
gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.common.distanceBetweenPositions((( gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length === 0 ) ? 0 :gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[0].getCenterXInScene()), (( gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length === 0 ) ? 0 :gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[0].getCenterYInScene()), (gdjs.RuntimeObject.getVariableNumber(((gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[0].getVariables()).getFromIndex(0))) + (( gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length === 0 ) ? 0 :gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[0].getWidth()) / 2, (gdjs.RuntimeObject.getVariableNumber(((gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[0].getVariables()).getFromIndex(1))) + (( gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length === 0 ) ? 0 :gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[0].getHeight()) / 2) < 10);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1 */
{for(var i = 0, len = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length ;i < len;++i) {
    gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].returnVariable(gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariables().getFromIndex(2)).setBoolean(false);
}
}
{for(var i = 0, len = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length ;i < len;++i) {
    gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getBehavior("Animation").setAnimationName("lucas-parado");
}
}
{for(var i = 0, len = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length ;i < len;++i) {
    gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].returnVariable(gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariables().getFromIndex(4)).setNumber(2);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Lucas"), gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1);
gdjs.copyArray(runtimeScene.getObjects("fase1"), gdjs.Cena_32sem_32t_237tuloCode.GDfase1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Cena_32sem_32t_237tuloCode.mapOfGDgdjs_9546Cena_959532sem_959532t_9595237tuloCode_9546GDfase1Objects1Objects, runtimeScene, false, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length;i<l;++i) {
    if ( gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].hasNoForces() ) {
        isConditionTrue_0 = true;
        gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[k] = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i];
        ++k;
    }
}
gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length;i<l;++i) {
    if ( gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariableNumber(gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariables().getFromIndex(4)) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[k] = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i];
        ++k;
    }
}
gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length = k;
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1 */
gdjs.copyArray(runtimeScene.getObjects("curva5"), gdjs.Cena_32sem_32t_237tuloCode.GDcurva5Objects1);
{for(var i = 0, len = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length ;i < len;++i) {
    gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].returnVariable(gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariables().getFromIndex(2)).setBoolean(true);
}
}
{for(var i = 0, len = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length ;i < len;++i) {
    gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].returnVariable(gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariables().getFromIndex(5)).setString("volta_curva5");
}
}
{for(var i = 0, len = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length ;i < len;++i) {
    gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].returnVariable(gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariables().getFromIndex(0)).setNumber((( gdjs.Cena_32sem_32t_237tuloCode.GDcurva5Objects1.length === 0 ) ? 0 :gdjs.Cena_32sem_32t_237tuloCode.GDcurva5Objects1[0].getCenterXInScene()) - (gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getWidth()) / 2);
}
}
{for(var i = 0, len = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length ;i < len;++i) {
    gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].returnVariable(gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariables().getFromIndex(1)).setNumber((( gdjs.Cena_32sem_32t_237tuloCode.GDcurva5Objects1.length === 0 ) ? 0 :gdjs.Cena_32sem_32t_237tuloCode.GDcurva5Objects1[0].getCenterYInScene()) - (gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getHeight()) / 2 - 10);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Lucas"), gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length;i<l;++i) {
    if ( gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariableBoolean(gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariables().getFromIndex(2), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[k] = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i];
        ++k;
    }
}
gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length;i<l;++i) {
    if ( gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariableString(gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariables().getFromIndex(5)) == "volta_curva5" ) {
        isConditionTrue_0 = true;
        gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[k] = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i];
        ++k;
    }
}
gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1 */
{for(var i = 0, len = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length ;i < len;++i) {
    gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getBehavior("Animation").setAnimationName("lucas-costas");
}
}
{for(var i = 0, len = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length ;i < len;++i) {
    gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getBehavior("Pathfinding").moveTo(runtimeScene, (gdjs.RuntimeObject.getVariableNumber(gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariables().getFromIndex(0))), (gdjs.RuntimeObject.getVariableNumber(gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariables().getFromIndex(1))));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Lucas"), gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length;i<l;++i) {
    if ( gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariableBoolean(gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariables().getFromIndex(2), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[k] = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i];
        ++k;
    }
}
gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length;i<l;++i) {
    if ( gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariableString(gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariables().getFromIndex(5)) == "volta_curva5" ) {
        isConditionTrue_0 = true;
        gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[k] = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i];
        ++k;
    }
}
gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.common.distanceBetweenPositions((( gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length === 0 ) ? 0 :gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[0].getCenterXInScene()), (( gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length === 0 ) ? 0 :gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[0].getCenterYInScene()), (gdjs.RuntimeObject.getVariableNumber(((gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[0].getVariables()).getFromIndex(0))) + (( gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length === 0 ) ? 0 :gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[0].getWidth()) / 2, (gdjs.RuntimeObject.getVariableNumber(((gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[0].getVariables()).getFromIndex(1))) + (( gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length === 0 ) ? 0 :gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[0].getHeight()) / 2) < 10);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1 */
gdjs.copyArray(runtimeScene.getObjects("curva4"), gdjs.Cena_32sem_32t_237tuloCode.GDcurva4Objects1);
{for(var i = 0, len = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length ;i < len;++i) {
    gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].returnVariable(gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariables().getFromIndex(5)).setString("volta_curva4");
}
}
{for(var i = 0, len = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length ;i < len;++i) {
    gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].returnVariable(gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariables().getFromIndex(0)).setNumber((( gdjs.Cena_32sem_32t_237tuloCode.GDcurva4Objects1.length === 0 ) ? 0 :gdjs.Cena_32sem_32t_237tuloCode.GDcurva4Objects1[0].getCenterXInScene()) - (gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getWidth()) / 2);
}
}
{for(var i = 0, len = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length ;i < len;++i) {
    gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].returnVariable(gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariables().getFromIndex(1)).setNumber((( gdjs.Cena_32sem_32t_237tuloCode.GDcurva4Objects1.length === 0 ) ? 0 :gdjs.Cena_32sem_32t_237tuloCode.GDcurva4Objects1[0].getCenterYInScene()) - (gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getHeight()) / 2 - 10);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Lucas"), gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length;i<l;++i) {
    if ( gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariableBoolean(gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariables().getFromIndex(2), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[k] = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i];
        ++k;
    }
}
gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length;i<l;++i) {
    if ( gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariableString(gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariables().getFromIndex(5)) == "volta_curva4" ) {
        isConditionTrue_0 = true;
        gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[k] = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i];
        ++k;
    }
}
gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1 */
{for(var i = 0, len = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length ;i < len;++i) {
    gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getBehavior("Animation").setAnimationName("lucas-costas");
}
}
{for(var i = 0, len = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length ;i < len;++i) {
    gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getBehavior("Pathfinding").moveTo(runtimeScene, (gdjs.RuntimeObject.getVariableNumber(gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariables().getFromIndex(0))), (gdjs.RuntimeObject.getVariableNumber(gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariables().getFromIndex(1))));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Lucas"), gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length;i<l;++i) {
    if ( gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariableBoolean(gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariables().getFromIndex(2), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[k] = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i];
        ++k;
    }
}
gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length;i<l;++i) {
    if ( gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariableString(gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariables().getFromIndex(5)) == "volta_curva4" ) {
        isConditionTrue_0 = true;
        gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[k] = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i];
        ++k;
    }
}
gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.common.distanceBetweenPositions((( gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length === 0 ) ? 0 :gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[0].getCenterXInScene()), (( gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length === 0 ) ? 0 :gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[0].getCenterYInScene()), (gdjs.RuntimeObject.getVariableNumber(((gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[0].getVariables()).getFromIndex(0))) + (( gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length === 0 ) ? 0 :gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[0].getWidth()) / 2, (gdjs.RuntimeObject.getVariableNumber(((gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[0].getVariables()).getFromIndex(1))) + (( gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length === 0 ) ? 0 :gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[0].getHeight()) / 2) < 10);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1 */
gdjs.copyArray(runtimeScene.getObjects("curva3"), gdjs.Cena_32sem_32t_237tuloCode.GDcurva3Objects1);
{for(var i = 0, len = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length ;i < len;++i) {
    gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].returnVariable(gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariables().getFromIndex(5)).setString("volta_curva3");
}
}
{for(var i = 0, len = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length ;i < len;++i) {
    gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].returnVariable(gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariables().getFromIndex(0)).setNumber((( gdjs.Cena_32sem_32t_237tuloCode.GDcurva3Objects1.length === 0 ) ? 0 :gdjs.Cena_32sem_32t_237tuloCode.GDcurva3Objects1[0].getCenterXInScene()) - (gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getWidth()) / 2);
}
}
{for(var i = 0, len = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length ;i < len;++i) {
    gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].returnVariable(gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariables().getFromIndex(1)).setNumber((( gdjs.Cena_32sem_32t_237tuloCode.GDcurva3Objects1.length === 0 ) ? 0 :gdjs.Cena_32sem_32t_237tuloCode.GDcurva3Objects1[0].getCenterYInScene()) - (gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getHeight()) / 2 - 20);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Lucas"), gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length;i<l;++i) {
    if ( gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariableBoolean(gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariables().getFromIndex(2), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[k] = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i];
        ++k;
    }
}
gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length;i<l;++i) {
    if ( gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariableString(gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariables().getFromIndex(5)) == "volta_curva3" ) {
        isConditionTrue_0 = true;
        gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[k] = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i];
        ++k;
    }
}
gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1 */
{for(var i = 0, len = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length ;i < len;++i) {
    gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getBehavior("Animation").setAnimationName("lucas-costas");
}
}
{for(var i = 0, len = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length ;i < len;++i) {
    gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getBehavior("Pathfinding").moveTo(runtimeScene, (gdjs.RuntimeObject.getVariableNumber(gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariables().getFromIndex(0))), (gdjs.RuntimeObject.getVariableNumber(gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariables().getFromIndex(1))));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Lucas"), gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length;i<l;++i) {
    if ( gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariableBoolean(gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariables().getFromIndex(2), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[k] = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i];
        ++k;
    }
}
gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length;i<l;++i) {
    if ( gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariableString(gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariables().getFromIndex(5)) == "volta_curva3" ) {
        isConditionTrue_0 = true;
        gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[k] = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i];
        ++k;
    }
}
gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.common.distanceBetweenPositions((( gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length === 0 ) ? 0 :gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[0].getCenterXInScene()), (( gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length === 0 ) ? 0 :gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[0].getCenterYInScene()), (gdjs.RuntimeObject.getVariableNumber(((gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[0].getVariables()).getFromIndex(0))) + (( gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length === 0 ) ? 0 :gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[0].getWidth()) / 2, (gdjs.RuntimeObject.getVariableNumber(((gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[0].getVariables()).getFromIndex(1))) + (( gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length === 0 ) ? 0 :gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[0].getHeight()) / 2) < 10);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1 */
gdjs.copyArray(runtimeScene.getObjects("curva2"), gdjs.Cena_32sem_32t_237tuloCode.GDcurva2Objects1);
{for(var i = 0, len = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length ;i < len;++i) {
    gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].returnVariable(gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariables().getFromIndex(5)).setString("volta_curva2");
}
}
{for(var i = 0, len = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length ;i < len;++i) {
    gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].returnVariable(gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariables().getFromIndex(0)).setNumber((( gdjs.Cena_32sem_32t_237tuloCode.GDcurva2Objects1.length === 0 ) ? 0 :gdjs.Cena_32sem_32t_237tuloCode.GDcurva2Objects1[0].getCenterXInScene()) - (gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getWidth()) / 2);
}
}
{for(var i = 0, len = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length ;i < len;++i) {
    gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].returnVariable(gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariables().getFromIndex(1)).setNumber((( gdjs.Cena_32sem_32t_237tuloCode.GDcurva2Objects1.length === 0 ) ? 0 :gdjs.Cena_32sem_32t_237tuloCode.GDcurva2Objects1[0].getCenterYInScene()) - (gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getHeight()) / 2 - 20);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Lucas"), gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length;i<l;++i) {
    if ( gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariableBoolean(gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariables().getFromIndex(2), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[k] = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i];
        ++k;
    }
}
gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length;i<l;++i) {
    if ( gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariableString(gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariables().getFromIndex(5)) == "volta_curva2" ) {
        isConditionTrue_0 = true;
        gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[k] = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i];
        ++k;
    }
}
gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1 */
{for(var i = 0, len = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length ;i < len;++i) {
    gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getBehavior("Animation").setAnimationName("lucas-costas");
}
}
{for(var i = 0, len = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length ;i < len;++i) {
    gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getBehavior("Pathfinding").moveTo(runtimeScene, (gdjs.RuntimeObject.getVariableNumber(gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariables().getFromIndex(0))), (gdjs.RuntimeObject.getVariableNumber(gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariables().getFromIndex(1))));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Lucas"), gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length;i<l;++i) {
    if ( gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariableBoolean(gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariables().getFromIndex(2), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[k] = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i];
        ++k;
    }
}
gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length;i<l;++i) {
    if ( gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariableString(gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariables().getFromIndex(5)) == "volta_curva2" ) {
        isConditionTrue_0 = true;
        gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[k] = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i];
        ++k;
    }
}
gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.common.distanceBetweenPositions((( gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length === 0 ) ? 0 :gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[0].getCenterXInScene()), (( gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length === 0 ) ? 0 :gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[0].getCenterYInScene()), (gdjs.RuntimeObject.getVariableNumber(((gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[0].getVariables()).getFromIndex(0))) + (( gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length === 0 ) ? 0 :gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[0].getWidth()) / 2, (gdjs.RuntimeObject.getVariableNumber(((gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[0].getVariables()).getFromIndex(1))) + (( gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length === 0 ) ? 0 :gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[0].getHeight()) / 2) < 10);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1 */
gdjs.copyArray(runtimeScene.getObjects("curva1"), gdjs.Cena_32sem_32t_237tuloCode.GDcurva1Objects1);
{for(var i = 0, len = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length ;i < len;++i) {
    gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].returnVariable(gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariables().getFromIndex(5)).setString("volta_curva1");
}
}
{for(var i = 0, len = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length ;i < len;++i) {
    gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].returnVariable(gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariables().getFromIndex(0)).setNumber((( gdjs.Cena_32sem_32t_237tuloCode.GDcurva1Objects1.length === 0 ) ? 0 :gdjs.Cena_32sem_32t_237tuloCode.GDcurva1Objects1[0].getCenterXInScene()) - (gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getWidth()) / 2);
}
}
{for(var i = 0, len = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length ;i < len;++i) {
    gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].returnVariable(gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariables().getFromIndex(1)).setNumber((( gdjs.Cena_32sem_32t_237tuloCode.GDcurva1Objects1.length === 0 ) ? 0 :gdjs.Cena_32sem_32t_237tuloCode.GDcurva1Objects1[0].getCenterYInScene()) - (gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getHeight()) / 2 - 30);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Lucas"), gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length;i<l;++i) {
    if ( gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariableBoolean(gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariables().getFromIndex(2), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[k] = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i];
        ++k;
    }
}
gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length;i<l;++i) {
    if ( gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariableString(gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariables().getFromIndex(5)) == "volta_curva1" ) {
        isConditionTrue_0 = true;
        gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[k] = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i];
        ++k;
    }
}
gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1 */
{for(var i = 0, len = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length ;i < len;++i) {
    gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getBehavior("Animation").setAnimationName("lucas-esquerda");
}
}
{for(var i = 0, len = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length ;i < len;++i) {
    gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getBehavior("Pathfinding").moveTo(runtimeScene, (gdjs.RuntimeObject.getVariableNumber(gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariables().getFromIndex(0))), (gdjs.RuntimeObject.getVariableNumber(gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariables().getFromIndex(1))));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Lucas"), gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length;i<l;++i) {
    if ( gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariableBoolean(gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariables().getFromIndex(2), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[k] = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i];
        ++k;
    }
}
gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length;i<l;++i) {
    if ( gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariableString(gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariables().getFromIndex(5)) == "volta_curva1" ) {
        isConditionTrue_0 = true;
        gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[k] = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i];
        ++k;
    }
}
gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.common.distanceBetweenPositions((( gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length === 0 ) ? 0 :gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[0].getCenterXInScene()), (( gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length === 0 ) ? 0 :gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[0].getCenterYInScene()), (gdjs.RuntimeObject.getVariableNumber(((gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[0].getVariables()).getFromIndex(0))) + (( gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length === 0 ) ? 0 :gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[0].getWidth()) / 2, (gdjs.RuntimeObject.getVariableNumber(((gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[0].getVariables()).getFromIndex(1))) + (( gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length === 0 ) ? 0 :gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[0].getHeight()) / 2) < 10);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1 */
gdjs.copyArray(runtimeScene.getObjects("fase1"), gdjs.Cena_32sem_32t_237tuloCode.GDfase1Objects1);
{for(var i = 0, len = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length ;i < len;++i) {
    gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].returnVariable(gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariables().getFromIndex(5)).setString("fase1");
}
}
{for(var i = 0, len = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length ;i < len;++i) {
    gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].returnVariable(gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariables().getFromIndex(0)).setNumber((( gdjs.Cena_32sem_32t_237tuloCode.GDfase1Objects1.length === 0 ) ? 0 :gdjs.Cena_32sem_32t_237tuloCode.GDfase1Objects1[0].getCenterXInScene()) - (gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getWidth()) / 2);
}
}
{for(var i = 0, len = gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length ;i < len;++i) {
    gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].returnVariable(gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getVariables().getFromIndex(1)).setNumber((( gdjs.Cena_32sem_32t_237tuloCode.GDfase1Objects1.length === 0 ) ? 0 :gdjs.Cena_32sem_32t_237tuloCode.GDfase1Objects1[0].getCenterYInScene()) - (gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1[i].getHeight()) / 2 - 10);
}
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.Cena_32sem_32t_237tuloCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects2.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDmapaObjects1.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDmapaObjects2.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GD_9595CasteloSaaSObjects1.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GD_9595CasteloSaaSObjects2.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDfase1Objects1.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDfase1Objects2.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDfase2Objects1.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDfase2Objects2.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDfase3Objects1.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDfase3Objects2.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDfase4Objects1.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDfase4Objects2.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDfase5Objects1.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDfase5Objects2.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDfase6Objects1.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDfase6Objects2.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDhomeObjects1.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDhomeObjects2.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDcurva1Objects1.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDcurva1Objects2.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDcurva2Objects1.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDcurva2Objects2.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDcurva3Objects1.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDcurva3Objects2.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDcurva4Objects1.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDcurva4Objects2.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDcurva5Objects1.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDcurva5Objects2.length = 0;

gdjs.Cena_32sem_32t_237tuloCode.eventsList0(runtimeScene);
gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects1.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDLucasObjects2.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDmapaObjects1.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDmapaObjects2.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GD_9595CasteloSaaSObjects1.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GD_9595CasteloSaaSObjects2.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDfase1Objects1.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDfase1Objects2.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDfase2Objects1.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDfase2Objects2.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDfase3Objects1.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDfase3Objects2.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDfase4Objects1.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDfase4Objects2.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDfase5Objects1.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDfase5Objects2.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDfase6Objects1.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDfase6Objects2.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDhomeObjects1.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDhomeObjects2.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDcurva1Objects1.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDcurva1Objects2.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDcurva2Objects1.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDcurva2Objects2.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDcurva3Objects1.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDcurva3Objects2.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDcurva4Objects1.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDcurva4Objects2.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDcurva5Objects1.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDcurva5Objects2.length = 0;


return;

}

gdjs['Cena_32sem_32t_237tuloCode'] = gdjs.Cena_32sem_32t_237tuloCode;
