{
  "name": "Warndelete",
  "permissions": "NONE",
  "permissions2": "NONE",
  "restriction": "1",
  "_id": "JrYqq",
  "actions": [
    {
      "server": "0",
      "varName": "",
      "info": "5",
      "storage": "1",
      "varName2": "icon",
      "name": "Store Server Info"
    },
    {
      "server": "0",
      "varName": "",
      "info": "2",
      "storage": "1",
      "varName2": "name",
      "name": "Store Server Info"
    },
    {
      "member": "1",
      "varName": "",
      "info": "2",
      "storage": "1",
      "varName2": "username.administrator",
      "name": "Store Member Info"
    },
    {
      "member": "1",
      "varName": "",
      "info": "16",
      "storage": "1",
      "varName2": "icon.administrator",
      "name": "Store Member Info"
    },
    {
      "member": "5",
      "varName": "użytkownik",
      "info": "2",
      "storage": "1",
      "varName2": "username.user",
      "name": "Store Member Info"
    },
    {
      "member": "5",
      "varName": "użytkownik",
      "info": "16",
      "storage": "1",
      "varName2": "icon.user",
      "name": "Store Member Info"
    },
    {
      "server": "0",
      "varName": "",
      "storage": "1",
      "varName2": "bot.member",
      "name": "Get Bot as Member"
    },
    {
      "member": "2",
      "varName": "bot.member",
      "permission": "MANAGE_MESSAGES",
      "branch": {
        "iftrue": "3",
        "iffalse": "0",
        "iftrueVal": "2"
      },
      "name": "Check Member Permissions"
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
          "color": "RED",
          "timestamp": "true",
          "imageUrl": "",
          "thumbUrl": "",
          "description": "`❌` Bot nie posiada uprawnień. `Zarządzanie wiadomościami`",
          "fields": [],
          "author": "Błąd",
          "authorUrl": "",
          "authorIcon": "${tempVars(\"icon\")}",
          "footerText": "${tempVars(\"username.administrator\")}",
          "footerIconUrl": "${tempVars(\"icon.administrator\")}"
        }
      ],
      "reply": true,
      "ephemeral": true,
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
      "varName": "bot.member",
      "permission": "ADMINISTRATOR",
      "branch": {
        "iftrue": "3",
        "iffalse": "0",
        "iftrueVal": "2"
      },
      "name": "Check Member Permissions"
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
          "color": "RED",
          "timestamp": "true",
          "imageUrl": "",
          "thumbUrl": "",
          "description": "`❌` Nie posiadasz permisji. Administrator`",
          "fields": [],
          "author": "Błąd",
          "authorUrl": "",
          "authorIcon": "${tempVars(\"icon\")}",
          "footerText": "${tempVars(\"username.administrator\")}",
          "footerIconUrl": "${tempVars(\"icon.administrator\")}"
        }
      ],
      "reply": true,
      "ephemeral": true,
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
      "server": "0",
      "varName": "",
      "info": "1",
      "storage": "1",
      "varName2": "id.serwer",
      "name": "Store Server Info"
    },
    {
      "member": "5",
      "varName": "użytkownik",
      "dataName": "${tempVars(\"id.serwer\")}.warn",
      "changeType": "1",
      "value": "-1",
      "name": "Control Member Data"
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
          "color": "GREEN",
          "timestamp": "true",
          "imageUrl": "",
          "thumbUrl": "",
          "description": "Pomyślnie usunięto warna!",
          "fields": [],
          "author": "Pomyślnie wykonano!",
          "authorUrl": "",
          "authorIcon": "${tempVars(\"icon\")}",
          "footerText": "${tempVars(\"username.administrator\")}",
          "footerIconUrl": "${tempVars(\"icon.administrator\")}"
        }
      ],
      "reply": true,
      "ephemeral": true,
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
      "member": "5",
      "varName": "użytkownik",
      "dataName": "${tempVars(\"id.serwer\")}.warn",
      "defaultVal": "0",
      "storage": "1",
      "varName2": "ilosc.warn",
      "name": "Store Member Data"
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
          "color": "RANDOM",
          "timestamp": "true",
          "imageUrl": "",
          "thumbUrl": "${tempVars(\"icon.user\")}",
          "description": "`🚩` **Administrator:**\n\n> ${member}\n\n`👤` **Użytkownik:**\n\n> ${slashParams(\"użytkownik\")}\n\n`📄` **Ilość warnów:**\n\n> `${tempVars(\"ilosc.warn\")}`",
          "fields": [],
          "author": "${tempVars(\"username.user\")}",
          "authorUrl": "",
          "authorIcon": "${tempVars(\"icon.user\")}",
          "footerText": "${tempVars(\"username.administrator\")}",
          "footerIconUrl": "${tempVars(\"icon.administrator\")}"
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
  "description": "usuń warna!",
  "parameters": [
    {
      "name": "użytkownik",
      "description": "Podaj użytkownika któremu chcesz usunąć warna!",
      "type": "USER",
      "required": true,
      "choices": null
    }
  ]
}