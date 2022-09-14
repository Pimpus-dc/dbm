{
  "name": "Stats",
  "permissions": "NONE",
  "permissions2": "NONE",
  "restriction": "1",
  "_id": "LuSLu",
  "actions": [
    {
      "member": "1",
      "varName": "",
      "info": "1",
      "storage": "1",
      "varName2": "id",
      "name": "Store Member Info"
    },
    {
      "member": "1",
      "varName": "",
      "info": "21",
      "storage": "1",
      "varName2": "username",
      "name": "Store Member Info"
    },
    {
      "member": "1",
      "varName": "",
      "info": "16",
      "storage": "1",
      "varName2": "avatar",
      "name": "Store Member Info"
    },
    {
      "server": "0",
      "varName": "1013908827365724271",
      "info": "5",
      "storage": "1",
      "varName2": "icon",
      "name": "Store Server Info"
    },
    {
      "server": "0",
      "varName": "",
      "info": "1",
      "storage": "1",
      "varName2": "id.serwer",
      "name": "Store Server Info"
    },
    {
      "server": "0",
      "varName": "1013908827365724271",
      "info": "2",
      "storage": "1",
      "varName2": "name",
      "name": "Store Server Info"
    },
    {
      "storage": "4",
      "varName": "Użytkownik",
      "comparison": "1",
      "value": "null",
      "branch": {
        "iftrue": "2",
        "iffalse": "0",
        "iftrueVal": "23"
      },
      "name": "Check Variable"
    },
    {
      "member": "5",
      "varName": "Użytkownik",
      "info": "1",
      "storage": "1",
      "varName2": "id_usuera_slash",
      "name": "Store Member Info"
    },
    {
      "storage": "1",
      "varName": "banner",
      "server": "0",
      "varName2": "",
      "member": "5",
      "varName3": null,
      "information": {
        "_index": 1
      },
      "info": "0",
      "info2": "2",
      "name": "Store Gotowka Info"
    },
    {
      "member": "5",
      "varName": "Użytkownik",
      "info": "16",
      "storage": "1",
      "varName2": "avatar_usuera_slash",
      "name": "Store Member Info"
    },
    {
      "member": "5",
      "varName": "Użytkownik",
      "info": "21",
      "storage": "1",
      "varName2": "name_usuera_slash",
      "name": "Store Member Info"
    },
    {
      "member": "5",
      "varName": "Użytkownik",
      "dataName": "${tempVars(\"id.serwer\")}.warn",
      "defaultVal": "0",
      "storage": "1",
      "varName2": "ilosc.warn",
      "name": "Store Member Data"
    },
    {
      "member": "5",
      "varName": "Użytkownik",
      "info": "7",
      "storage": "1",
      "varName2": "role_list_usuera_slash",
      "name": "Store Member Info"
    },
    {
      "member": "5",
      "varName": "Użytkownik",
      "info": "22",
      "storage": "1",
      "varName2": "temp_usuera_slash",
      "name": "Store Member Info"
    },
    {
      "member": "5",
      "varName": "Użytkownik",
      "info": "24",
      "storage": "1",
      "varName2": "temp_usuera_slash_serwer",
      "name": "Store Member Info"
    },
    {
      "sourceDate": "${tempVars(\"temp_usuera_slash\")}",
      "dateLanguage": "\"pl\"",
      "modeStorage": "0",
      "info": "12",
      "buildInput": "",
      "storage": "1",
      "varName": "unix_slash",
      "name": "Store Date Info Plus"
    },
    {
      "sourceDate": "${tempVars(\"temp_usuera_slash_serwer\")}",
      "dateLanguage": "\"pl\"",
      "modeStorage": "0",
      "info": "12",
      "buildInput": "",
      "storage": "1",
      "varName": "unix_serwer_slash",
      "name": "Store Date Info Plus"
    },
    {
      "storage": "1",
      "varName": "banner",
      "comparison": "1",
      "value": "undefined",
      "branch": {
        "iftrue": "3",
        "iffalse": "0",
        "iftrueVal": "2"
      },
      "name": "Check Variable"
    },
    {
      "channel": "0",
      "varName": "",
      "message": "",
      "buttons": [],
      "selectMenus": [],
      "attachments": [],
      "embeds": [
        {
          "title": "",
          "url": "",
          "color": "YELLOW",
          "timestamp": "true",
          "imageUrl": "${tempVars(\"banner\")}",
          "thumbUrl": "${tempVars(\"avatar_usuera_slash\")}",
          "description": "``` Zobacz informacje, które wygenerowałem poniżej!```",
          "fields": [
            {
              "name": "`●`  Informacje ogólne:",
              "value": "> **Nick**: `${tempVars(\"name_usuera_slash\")}`\n> **Id**: `${tempVars(\"id_usuera_slash\")}`\n> **Banner**: [Kliknij, aby wyświetlić](${tempVars(\"banner\")})\n> **Avatar**: [kliknij aby wyświetlić](${tempVars(\"avatar_usuera_slash\")})\n> **Data stworzenia konta**: <t:${tempVars(\"unix_slash\")}:R>",
              "inline": "false"
            },
            {
              "name": "`●` Informacje serwerowe:",
              "value": "> **Data dołączenia na serwer**: <t:${tempVars(\"unix_serwer_slash\")}:R>\n> **Najwyższa ranga:** ${tempVars(\"role_list_usuera_slash\")}\n> **Ilość warnów:** ${tempVars(\"ilosc.warn\")}",
              "inline": "false"
            }
          ],
          "author": "${tempVars(\"name_usuera_slash\")}",
          "authorUrl": "",
          "authorIcon": "${tempVars(\"icon\")}",
          "footerText": "${tempVars(\"name_usuera_slash\")}",
          "footerIconUrl": "${tempVars(\"avatar_usuera_slash\")}"
        }
      ],
      "reply": true,
      "ephemeral": false,
      "tts": false,
      "overwrite": false,
      "dontSend": false,
      "editMessage": "0",
      "editMessageVarName": "",
      "storage": "0",
      "varName2": "",
      "name": "Send Message"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "channel": "0",
      "varName": "",
      "message": "",
      "buttons": [],
      "selectMenus": [],
      "attachments": [],
      "embeds": [
        {
          "title": "",
          "url": "",
          "color": "YELLOW",
          "timestamp": "true",
          "imageUrl": "",
          "thumbUrl": "${tempVars(\"avatar_usuera_slash\")}",
          "description": "``` Zobacz informacje, które wygenerowałem poniżej!```",
          "fields": [
            {
              "name": "`●`  Informacje ogólne:",
              "value": "> **Nick**: `${tempVars(\"name_usuera_slash\")}`\n> **Id**: `${tempVars(\"id_usuera_slash\")}`\n> **Avatar**: [kliknij aby wyświetlić](${tempVars(\"avatar_usuera_slash\")})\n> **Data stworzenia konta**: <t:${tempVars(\"unix_slash\")}:R>",
              "inline": "false"
            },
            {
              "name": "`●`   Informacje serwerowe:",
              "value": "> **Data dołączenia na serwer**: <t:${tempVars(\"unix_serwer_slash\")}:R>\n> **Najwyższa ranga:**: ${tempVars(\"role_list_usuera_slash\")}\n> **Ilość warnów:** ${tempVars(\"ilosc.warn\")}",
              "inline": "false"
            }
          ],
          "author": "${tempVars(\"name_usuera_slash\")}",
          "authorUrl": "",
          "authorIcon": "${tempVars(\"icon\")}",
          "footerText": "${tempVars(\"name_usuera_slash\")}",
          "footerIconUrl": "${tempVars(\"avatar_usuera_slash\")}"
        }
      ],
      "reply": true,
      "ephemeral": false,
      "tts": false,
      "overwrite": false,
      "dontSend": false,
      "editMessage": "0",
      "editMessageVarName": "",
      "storage": "0",
      "varName2": "",
      "name": "Send Message"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "member": "1",
      "varName": "Użytkownik",
      "info": "1",
      "storage": "1",
      "varName2": "id_usuera",
      "name": "Store Member Info"
    },
    {
      "member": "1",
      "varName": "Użytkownik",
      "info": "16",
      "storage": "1",
      "varName2": "avatar_usuera",
      "name": "Store Member Info"
    },
    {
      "member": "1",
      "varName": "Użytkownik",
      "dataName": "${tempVars(\"id.serwer\")}.warn",
      "defaultVal": "0",
      "storage": "1",
      "varName2": "ilosc.warn",
      "name": "Store Member Data"
    },
    {
      "storage": "1",
      "varName": "banner",
      "member": "1",
      "varName3": "Użytkownik",
      "server": "0",
      "varName2": "",
      "information": {
        "_index": 1
      },
      "info": "0",
      "info2": "2",
      "name": "Store Gotowka Info"
    },
    {
      "member": "1",
      "varName": "Użytkownik",
      "info": "21",
      "storage": "1",
      "varName2": "name_usuera",
      "name": "Store Member Info"
    },
    {
      "member": "1",
      "varName": "Użytkownik",
      "info": "7",
      "storage": "1",
      "varName2": "role_list_usuera",
      "name": "Store Member Info"
    },
    {
      "member": "1",
      "varName": "Użytkownik",
      "info": "22",
      "storage": "1",
      "varName2": "temp_usuera_1",
      "name": "Store Member Info"
    },
    {
      "member": "1",
      "varName": "Użytkownik",
      "info": "24",
      "storage": "1",
      "varName2": "temp_usuera_2",
      "name": "Store Member Info"
    },
    {
      "sourceDate": "${tempVars(\"temp_usuera_1\")}",
      "dateLanguage": "\"pl\"",
      "modeStorage": "0",
      "info": "12",
      "buildInput": "",
      "storage": "1",
      "varName": "unix",
      "name": "Store Date Info Plus"
    },
    {
      "sourceDate": "${tempVars(\"temp_usuera_2\")}",
      "dateLanguage": "\"pl\"",
      "modeStorage": "0",
      "info": "12",
      "buildInput": "",
      "storage": "1",
      "varName": "unix_serwer",
      "name": "Store Date Info Plus"
    },
    {
      "storage": "1",
      "varName": "banner",
      "comparison": "1",
      "value": "undefined",
      "branch": {
        "iftrue": "3",
        "iffalse": "0",
        "iftrueVal": "2"
      },
      "name": "Check Variable"
    },
    {
      "channel": "0",
      "varName": "",
      "message": "",
      "buttons": [],
      "selectMenus": [],
      "attachments": [],
      "embeds": [
        {
          "title": "",
          "url": "",
          "color": "YELLOW",
          "timestamp": "true",
          "imageUrl": "${tempVars(\"banner\")}",
          "thumbUrl": "${tempVars(\"avatar_usuera\")}",
          "description": "``` Zobacz informacje, które wygenerowałem poniżej!```",
          "fields": [
            {
              "name": "`●`  Informacje ogólne:",
              "value": "> **Nick**: `${tempVars(\"name_usuera\")}`\n> **Id**: `${tempVars(\"id_usuera\")}`\n> **Banner**: [Kliknij, aby wyświetlić](${tempVars(\"banner\")})\n> **Avatar**: [kliknij aby wyświetlić](${tempVars(\"avatar_usuera\")})\n> **Data stworzenia konta**: <t:${tempVars(\"unix\")}:R>",
              "inline": "false"
            },
            {
              "name": "`●`   Informacje serwerowe:",
              "value": "> **Data dołączenia na serwer**: <t:${tempVars(\"unix_serwer\")}:R>\n> **Najwyższa ranga:**: ${tempVars(\"role_list_usuera\")}\n> **Ilość warnów:** ${tempVars(\"ilosc.warn\")}",
              "inline": "false"
            }
          ],
          "author": "${tempVars(\"name_usuera\")}",
          "authorUrl": "",
          "authorIcon": "${tempVars(\"icon\")}",
          "footerText": "${tempVars(\"name_usuera\")}",
          "footerIconUrl": "${tempVars(\"avatar_usuera\")}"
        }
      ],
      "reply": true,
      "ephemeral": false,
      "tts": false,
      "overwrite": false,
      "dontSend": false,
      "editMessage": "0",
      "editMessageVarName": "",
      "storage": "0",
      "varName2": "",
      "name": "Send Message"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "channel": "0",
      "varName": "",
      "message": "",
      "buttons": [],
      "selectMenus": [],
      "attachments": [],
      "embeds": [
        {
          "title": "",
          "url": "",
          "color": "YELLOW",
          "timestamp": "true",
          "imageUrl": "",
          "thumbUrl": "${tempVars(\"avatar_usuera\")}",
          "description": "``` Zobacz informacje, które wygenerowałem poniżej!```",
          "fields": [
            {
              "name": "`●`  Informacje ogólne:",
              "value": "> **Nick**: `${tempVars(\"name_usuera\")}`\n> **Id**: `${tempVars(\"id_usuera\")}`\n> **Avatar**: [kliknij aby wyświetlić](${tempVars(\"avatar_usuera\")})\n> **Data stworzenia konta**: <t:${tempVars(\"unix\")}:R>",
              "inline": "false"
            },
            {
              "name": "`●`  Informacje serwerowe:",
              "value": "> **Data dołączenia na serwer**: <t:${tempVars(\"unix_serwer\")}:R>\n> **Najwyższa ranga:**: ${tempVars(\"role_list_usuera\")}\n> **Ilość warnów:** ${tempVars(\"ilosc.warn\")}",
              "inline": "false"
            }
          ],
          "author": "${tempVars(\"name_usuera\")}",
          "authorUrl": "",
          "authorIcon": "${tempVars(\"icon\")}",
          "footerText": "${tempVars(\"name_usuera\")}",
          "footerIconUrl": "${tempVars(\"avatar_usuera\")}"
        }
      ],
      "reply": true,
      "ephemeral": false,
      "tts": false,
      "overwrite": false,
      "dontSend": false,
      "editMessage": "0",
      "editMessageVarName": "",
      "storage": "0",
      "varName2": "",
      "name": "Send Message"
    }
  ],
  "comType": "4",
  "description": "Zobacz swoje informacje o koncie! ",
  "parameters": [
    {
      "name": "Użytkownik",
      "description": "Wybierz użytkownika",
      "type": "USER",
      "required": false,
      "choices": null
    }
  ]
}