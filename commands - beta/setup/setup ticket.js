{
  "name": "Setup ticket",
  "permissions": "NONE",
  "permissions2": "NONE",
  "restriction": "1",
  "_id": "uWaqZ",
  "actions": [
    {
      "role": "6",
      "varName": "Rola",
      "info": "1",
      "storage": "3",
      "varName2": "rola_id",
      "name": "Store Role Info"
    },
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
      "member": "1",
      "varName": "",
      "permission": "ADMINISTRATOR",
      "branch": {
        "iftrue": "2",
        "iffalse": "0",
        "iftrueVal": "7"
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
          "description": "<a:nie:957694133596737606>   **Nie stety nie posiadasz permisji** <a:nie:957694133596737606> ",
          "fields": [],
          "author": "Ups...",
          "authorUrl": "",
          "authorIcon": "${tempVars(\"iconinne\")}",
          "footerText": "${tempVars(\"nameinne\")}",
          "footerIconUrl": "${tempVars(\"iconinne\")}"
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
      "value": "slashParams(\"Tre????_ticketa\")",
      "name": "Control Server Data"
    },
    {
      "channel": "0",
      "varName": "",
      "message": "Wys??ano na kana?? ${slashParams(\"Kana??\")}",
      "buttons": [],
      "selectMenus": [],
      "attachments": [],
      "embeds": [],
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
      "time": "1",
      "measurement": "1",
      "name": "Wait"
    },
    {
      "channel": "8",
      "varName": "Kana??",
      "message": "",
      "buttons": [
        {
          "name": "${slashParams(\"nazwa_przycisku\")}",
          "type": "PRIMARY",
          "id": "msg-button-3560cc1",
          "row": "",
          "url": "",
          "emoji": "",
          "mode": "PERSISTENT",
          "time": "",
          "actions": [
            {
              "member": "1",
              "varName": "",
              "dataName": "ticket",
              "defaultVal": "0",
              "storage": "1",
              "varName2": "tck",
              "name": "Store Member Data"
            },
            {
              "server": "0",
              "varName": "",
              "info": "5",
              "storage": "1",
              "varName2": "sic",
              "name": "Store Server Info"
            },
            {
              "server": "0",
              "varName": "",
              "dataName": "id-kategori-ticket",
              "defaultVal": "0",
              "storage": "1",
              "varName2": "kategoria-ticketa",
              "name": "Store Server Data"
            },
            {
              "server": "0",
              "varName": "",
              "dataName": "id-tresc-otworzonego-ticket",
              "defaultVal": "`Brak ustawionej wiadomo??ci`",
              "storage": "1",
              "varName2": "tresc ticketa ",
              "name": "Store Server Data"
            },
            {
              "channelName": "${member}",
              "topic": "",
              "position": "",
              "storage": "1",
              "varName": "stwch",
              "categoryID": "${tempVars(\"kategoria-ticketa\")}",
              "reason": "",
              "name": "Create Text Channel"
            },
            {
              "channel": "3",
              "varName": "stwch",
              "role": "101",
              "varName2": "${slashParams(\"rola\")}",
              "permission": "VIEW_CHANNEL",
              "state": "2",
              "reason": "",
              "name": "Set Role Channel Perms"
            },
            {
              "channel": "3",
              "varName": "stwch",
              "member": "1",
              "varName2": "",
              "permission": "VIEW_CHANNEL",
              "state": "0",
              "reason": "",
              "name": "Set Member Channel Perms"
            },
            {
              "channel": "3",
              "varName": "stwch",
              "info": "1",
              "storage": "1",
              "varName2": "chid",
              "name": "Store Channel Info"
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
                  "title": "<a:tak:957694133374439424>  Sukces!",
                  "url": "",
                  "color": "GREEN",
                  "timestamp": "true",
                  "imageUrl": "",
                  "thumbUrl": "",
                  "description": "Pomy??lnie stworzono tw??j ticket!\n<#${tempVars(\"chid\")}>",
                  "fields": [],
                  "author": "",
                  "authorUrl": "",
                  "authorIcon": "",
                  "footerText": "${server.name}",
                  "footerIconUrl": "${tempVars(\"sic\")}"
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
              "channel": "103",
              "varName": "${tempVars(\"chid\")}",
              "message": "",
              "buttons": [
                {
                  "name": " Zamknij ticket",
                  "type": "DANGER",
                  "id": "msg-button-b0a392e",
                  "row": "",
                  "url": "",
                  "emoji": "",
                  "mode": "PERSISTENT",
                  "time": "",
                  "actions": [
                    {
                      "server": "0",
                      "varName": "",
                      "info": "5",
                      "storage": "1",
                      "varName2": "avicon1",
                      "name": "Store Server Info"
                    },
                    {
                      "channel": "0",
                      "varName": "",
                      "info": "2",
                      "storage": "1",
                      "varName2": "nazwach",
                      "name": "Store Channel Info"
                    },
                    {
                      "member": "101",
                      "varName": "${tempVars(\"nazwach\")}",
                      "info": "0",
                      "storage": "1",
                      "varName2": "mem",
                      "name": "Store Member Info"
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
                          "title": "??????? Ticket",
                          "url": "",
                          "color": "",
                          "timestamp": "false",
                          "imageUrl": "",
                          "thumbUrl": "",
                          "description": "Ticket zostanie zamkni??ty za 5 sekund!",
                          "fields": [],
                          "author": "",
                          "authorUrl": "",
                          "authorIcon": "",
                          "footerText": "${server.name}",
                          "footerIconUrl": "${tempVars(\"avicon1\")}"
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
                      "time": "5",
                      "measurement": "1",
                      "name": "Wait"
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
                  "title": "Ticket:",
                  "url": "",
                  "color": "RANDOM",
                  "timestamp": "true",
                  "imageUrl": "",
                  "thumbUrl": "",
                  "description": "${tempVars(\"tresc ticketa \")}",
                  "fields": [],
                  "author": "",
                  "authorUrl": "",
                  "authorIcon": "",
                  "footerText": "${server.name}",
                  "footerIconUrl": "${tempVars(\"sic\")}"
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
          "description": "${slashParams(\"Tre????\")}",
          "fields": [],
          "author": "Ticket",
          "authorUrl": "",
          "authorIcon": "${tempVars(\"iconinne\")}",
          "footerText": "${tempVars(\"nameinne\")}",
          "footerIconUrl": "${tempVars(\"iconinne\")}"
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
  "parameters": [
    {
      "name": "Kana??",
      "description": "Wybierz kana??",
      "type": "CHANNEL",
      "required": true,
      "choices": null
    },
    {
      "name": "Tre????",
      "description": "Podaj tre???? ticketa",
      "type": "STRING",
      "required": true,
      "choices": null
    },
    {
      "name": "nazwa_przycisku",
      "description": "Podaj nazw?? przycisku",
      "type": "STRING",
      "required": true,
      "choices": null
    },
    {
      "name": "kategoria",
      "description": "podaj id kategori",
      "type": "STRING",
      "required": true,
      "choices": null
    },
    {
      "name": "Tre????_ticketa",
      "description": "Wprowad?? tre???? otworzonego ticketa",
      "type": "STRING",
      "required": true,
      "choices": null
    }
  ],
  "description": " Ustaw ticketa"
}
