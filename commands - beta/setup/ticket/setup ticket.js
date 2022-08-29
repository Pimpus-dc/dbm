{
  "name": "Setup ticket",
  "permissions": "NONE",
  "permissions2": "NONE",
  "restriction": "1",
  "_id": "XRYcW",
  "actions": [
    {
      "server": "0",
      "varName": "957672571044761680",
      "info": "2",
      "storage": "1",
      "varName2": "nameinne",
      "name": "Store Server Info"
    },
    {
      "server": "0",
      "varName": "957672571044761680",
      "info": "5",
      "storage": "1",
      "varName2": "iconinne",
      "name": "Store Server Info"
    },
    {
      "server": "0",
      "varName": "957672571044761680",
      "info": "2",
      "storage": "1",
      "varName2": "name",
      "name": "Store Server Info"
    },
    {
      "server": "0",
      "varName": "957672571044761680",
      "info": "5",
      "storage": "1",
      "varName2": "icon",
      "name": "Store Server Info"
    },
    {
      "server": "0",
      "varName": "",
      "storage": "1",
      "varName2": "bot.pikatchu",
      "name": "Get Bot as Member"
    },
    {
      "member": "2",
      "varName": "bot.pikatchu",
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
          "description": "`❌`   **Bot nie posiada permisji** `(Administrator)`",
          "fields": [],
          "author": "Ups...",
          "authorUrl": "",
          "authorIcon": "${tempVars(\"icon\")}",
          "footerText": "${tempVars(\"name\")}",
          "footerIconUrl": "${tempVars(\"icon\")}"
        }
      ],
      "reply": true,
      "ephemeral": true,
      "tts": false,
      "overwrite": false,
      "dontSend": false,
      "editMessage": "1",
      "editMessageVarName": "Ups",
      "storage": "0",
      "varName2": "",
      "name": "Send Message"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "member": "1",
      "varName": "",
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
          "description": "`❌`   **Niestety nie posiadasz permisji** `❌`",
          "fields": [],
          "author": "Ups...",
          "authorUrl": "",
          "authorIcon": "${tempVars(\"icon\")}",
          "footerText": "${tempVars(\"name\")}",
          "footerIconUrl": "${tempVars(\"icon\")}"
        }
      ],
      "reply": true,
      "ephemeral": false,
      "tts": false,
      "overwrite": false,
      "dontSend": false,
      "editMessage": "1",
      "editMessageVarName": "Ups",
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
      "dataName": "modal.ticket",
      "changeType": "0",
      "value": "slashParams(\"modal\")",
      "name": "Control Server Data"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "id-kategori-ticket",
      "changeType": "0",
      "value": "slashParams(\"kategoria\")",
      "name": "Control Server Data"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "id-tresc-otworzonego-ticket",
      "changeType": "0",
      "value": "slashParams(\"Treść_ticketa\")",
      "name": "Control Server Data"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "ticket.on.off",
      "changeType": "0",
      "value": "1",
      "name": "Control Server Data"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "ticket.sprawdzanie",
      "changeType": "0",
      "value": "1",
      "name": "Control Server Data"
    },
    {
      "channel": "8",
      "varName": "Kanał",
      "message": "",
      "buttons": [
        {
          "name": "${slashParams(\"nazwa_przycisku\")}",
          "type": "PRIMARY",
          "id": "msg-button-b162402",
          "row": "",
          "url": "",
          "emoji": "",
          "mode": "PERSISTENT",
          "time": "",
          "actions": [
            {
              "server": "0",
              "varName": "",
              "dataName": "id-kategori-ticket",
              "defaultVal": "0",
              "storage": "1",
              "varName2": "kategoria.tt",
              "name": "Store Server Data"
            },
            {
              "server": "101",
              "varName": "957672571044761680",
              "info": "2",
              "storage": "1",
              "varName2": "name",
              "name": "Store Server Info"
            },
            {
              "server": "101",
              "varName": "957672571044761680",
              "info": "5",
              "storage": "1",
              "varName2": "icon",
              "name": "Store Server Info"
            },
            {
              "server": "0",
              "varName": "",
              "dataName": "id-tresc-otworzonego-ticket",
              "defaultVal": "0",
              "storage": "1",
              "varName2": "tresc.tt",
              "name": "Store Server Data"
            },
            {
              "channelName": "${member}",
              "topic": "",
              "position": "",
              "storage": "1",
              "varName": "channel.tt",
              "categoryID": "${tempVars(\"kategoria.tt\")}",
              "reason": "",
              "name": "Create Text Channel"
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
                  "timestamp": "false",
                  "imageUrl": "",
                  "thumbUrl": "",
                  "description": "Stworzono kanał pomocy (${tempVars(\"channel.tt\")})",
                  "fields": [],
                  "author": "",
                  "authorUrl": "",
                  "authorIcon": "",
                  "footerText": "",
                  "footerIconUrl": ""
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
              "channel": "5",
              "varName": "channel.tt",
              "message": "",
              "buttons": [
                {
                  "name": "Zamknij",
                  "type": "DANGER",
                  "id": "msg-button-9505faf",
                  "row": "",
                  "url": "",
                  "emoji": "",
                  "mode": "PERSISTENT",
                  "time": "",
                  "actions": [
                    {
                      "member": "1",
                      "varName": "",
                      "permission": "MANAGE_CHANNELS",
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
                          "timestamp": "false",
                          "imageUrl": "",
                          "thumbUrl": "",
                          "description": "`Brak posiadanych permisji`",
                          "fields": [],
                          "author": "",
                          "authorUrl": "",
                          "authorIcon": "",
                          "footerText": "",
                          "footerIconUrl": ""
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
                      "storage": "0",
                      "varName": "",
                      "reason": "",
                      "name": "Delete Channel"
                    }
                  ]
                }
              ],
              "selectMenus": [],
              "attachments": [],
              "embeds": [
                {
                  "title": "",
                  "url": "",
                  "color": "RANDOM",
                  "timestamp": "false",
                  "imageUrl": "",
                  "thumbUrl": "",
                  "description": "${tempVars(\"tresc.tt\")}",
                  "fields": [],
                  "author": "Ticket:",
                  "authorUrl": "",
                  "authorIcon": "${tempVars(\"icon\")}",
                  "footerText": "${tempVars(\"name\")}",
                  "footerIconUrl": "${tempVars(\"icon\")}"
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
              "storage": "3",
              "varName": "channel.tt",
              "permission": "VIEW_CHANNEL",
              "state": "1",
              "reason": "",
              "name": "Set Channel Permissions"
            },
            {
              "storage": "3",
              "varName": "channel.tt",
              "permission": "SEND_MESSAGES",
              "state": "1",
              "reason": "",
              "name": "Set Channel Permissions"
            },
            {
              "channel": "3",
              "varName": "channel.tt",
              "member": "1",
              "varName2": "",
              "permission": "VIEW_CHANNEL",
              "state": "0",
              "reason": "",
              "name": "Set Member Channel Perms"
            },
            {
              "channel": "3",
              "varName": "channel.tt",
              "member": "1",
              "varName2": "",
              "permission": "SEND_MESSAGES",
              "state": "0",
              "reason": "",
              "name": "Set Member Channel Perms"
            }
          ]
        }
      ],
      "selectMenus": [],
      "attachments": [],
      "embeds": [
        {
          "title": "",
          "url": "",
          "color": "RANDOM",
          "timestamp": "false",
          "imageUrl": "",
          "thumbUrl": "",
          "description": "${slashParams(\"Treść\")}",
          "fields": [],
          "author": " Ticket",
          "authorUrl": "",
          "authorIcon": "${tempVars(\"icon\")}",
          "footerText": "${tempVars(\"name\")}",
          "footerIconUrl": "${tempVars(\"icon\")}"
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
          "timestamp": "false",
          "imageUrl": "",
          "thumbUrl": "",
          "description": "``` Pomyślnie ustawiono setupa!```",
          "fields": [],
          "author": "",
          "authorUrl": "",
          "authorIcon": "",
          "footerText": "",
          "footerIconUrl": ""
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
    }
  ],
  "comType": "4",
  "parameters": [
    {
      "name": "modal",
      "description": "Wybierz czy modal ma być włączony czy wyłączony",
      "type": "STRING",
      "required": true,
      "choices": [
        {
          "name": "on",
          "value": "1"
        },
        {
          "name": "off",
          "value": "2"
        }
      ]
    },
    {
      "name": "kategoria",
      "description": "podaj id kategori",
      "type": "STRING",
      "required": true,
      "choices": null
    },
    {
      "name": "Treść_ticketa",
      "description": "Wprowadź treść otworzonego ticketa",
      "type": "STRING",
      "required": true,
      "choices": null
    }
  ],
  "description": " Ustaw ticketa"
}
