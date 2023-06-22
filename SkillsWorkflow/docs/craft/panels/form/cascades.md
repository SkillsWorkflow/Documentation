---
id:  cascades
title: Create Cascade effect
sidebar_label: Cascades
---

```js
    {
        dataField: "CompanyId",
        label: {
            text: "CompanyId"
        },
        editorType: "dxSelectBox",
        entity: "company",   //mete automaticamente a lookup desta entity
        editorOptions: {
            name: "CompanyId"
            lookup:{
                endpoint: {
                    load: "v3/payment-conditions/lookup", // string ou function
                    byKey: "v3/payment-conditions" // string ou function - se for string depois vai meter /" + key + "/lookup"
                },
                dataSource: "", // brevemente
                name: "lookupTemplate", //string - nome de outra lookup, quando não é default.
                dependencyEditor: "DivisionId", //string - nome do campo dx que faz 'desbloquear' este campo. (dxSelectBox, dxNumberBox, dxDateBox, dxCheckBox/dxSwitch, dxTextBox)
                filterEditors: ["DivsionId", "DepartmentId"], // string ou array - nome do dx field (dxSelectBox, dxNumberBox, dxDateBox, dxCheckBox/dxSwitch, dxTextBox)
                filters: [   //values
                    { 
                        name: "DocumentTypeName", //nome do filtro 
                        value: "Skill.Module.BusinessObjects.PriceTable" //valor metido à mão para o filtro 
                    },
                ]
            }
        }
    }
        
    // outra alternativa
    {
        dataField: "CompanyId",
        label: {
            text: "CompanyId"
        },
        editorType: "dxSelectBox",
        editorOptions: {
            name: "CompanyId",
            ...SW.UI.SelectBox.getEditorOptions(
                "v3/company",
                {
                    endpointByKey: "v3/company"
                    onBeforeLoad: function(a){
                    }
                }
            )
        }
    }
```