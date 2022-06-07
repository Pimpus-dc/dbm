{
  "name": "modal wyslij",
  "permissions": "NONE",
  "permissions2": "NONE",
  "restriction": "1",
  "_id": "cEJRo",
  "actions": [
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
          "timestamp": "false",
          "imageUrl": "",
          "thumbUrl": "",
          "description": "```✅ Pomyślnie ustawiono modalsa ```",
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
      "server": "0",
      "varName": "",
      "dataName": "modal.ilosc",
      "defaultVal": "0",
      "storage": "1",
      "varName2": "ilosc.modalsow",
      "name": "Store Server Data"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "modal.button",
      "defaultVal": "0",
      "storage": "1",
      "varName2": "button.nazwa",
      "name": "Store Server Data"
    },
    {
      "storage": "1",
      "varName": "ilosc.modalsow",
      "branches": [
        {
          "comparison": "1",
          "value": "1",
          "actions": [
            {
              "server": "0",
              "varName": "",
              "dataName": "modal.button",
              "defaultVal": "0",
              "storage": "1",
              "varName2": "button.nazwa",
              "name": "Store Server Data"
            },
            {
              "channel": "8",
              "varName": "channel",
              "message": "",
              "buttons": [
                {
                  "name": "${tempVars(\"button.nazwa\")}",
                  "type": "PRIMARY",
                  "id": "msg-button-1e06fc6",
                  "row": "",
                  "url": "",
                  "emoji": "",
                  "mode": "PERSISTENT",
                  "time": "",
                  "actions": [
                    {
                      "server": "0",
                      "varName": "",
                      "dataName": "modal.p1",
                      "defaultVal": "0",
                      "storage": "1",
                      "varName2": "p1",
                      "name": "Store Server Data"
                    },
                    {
                      "server": "0",
                      "varName": "",
                      "dataName": "modal.min1",
                      "defaultVal": "0",
                      "storage": "1",
                      "varName2": "min1",
                      "name": "Store Server Data"
                    },
                    {
                      "server": "0",
                      "varName": "",
                      "dataName": "modal.max1",
                      "defaultVal": "0",
                      "storage": "1",
                      "varName2": "max1",
                      "name": "Store Server Data"
                    },
                    {
                      "server": "0",
                      "varName": "",
                      "dataName": "modal.title",
                      "defaultVal": "0",
                      "storage": "1",
                      "varName2": "title1",
                      "name": "Store Server Data"
                    },
                    {
                      "server": "0",
                      "varName": "",
                      "dataName": "modal.opis1",
                      "defaultVal": "0",
                      "storage": "1",
                      "varName2": "opis1",
                      "name": "Store Server Data"
                    },
                    {
                      "server": "0",
                      "varName": "",
                      "dataName": "modal.channel.log",
                      "defaultVal": "",
                      "storage": "1",
                      "varName2": "log1",
                      "name": "Store Server Data"
                    },
                    {
                      "title": "${tempVars(\"title1\")}",
                      "textInputs": [
                        {
                          "name": "${tempVars(\"p1\")}",
                          "placeholder": "${tempVars(\"opis1\")}",
                          "minLength": "${tempVars(\"min1\")}",
                          "maxLength": "${tempVars(\"max1\")}",
                          "id": "pytanie1",
                          "row": "1",
                          "style": "SHORT",
                          "required": "true"
                        }
                      ],
                      "name": "Show Modal"
                    },
                    {
                      "channel": "0",
                      "varName": "",
                      "message": "Dziękujemy za wypełnienie!",
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
                      "channel": "103",
                      "varName": "${tempVars(\"log1\")}",
                      "message": "${member}",
                      "buttons": [],
                      "selectMenus": [],
                      "attachments": [],
                      "embeds": [
                        {
                          "title": "Odpowiedź na formularz",
                          "url": "",
                          "color": "RED",
                          "timestamp": "true",
                          "imageUrl": "",
                          "thumbUrl": "",
                          "description": "${tempVars(\"p1\")}:\n\n> `${tempVars(\"pytanie1\")}`",
                          "fields": [],
                          "author": "",
                          "authorUrl": "",
                          "authorIcon": "",
                          "footerText": "",
                          "footerIconUrl": ""
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
                  "title": "${slashParams(\"tytuł\")}",
                  "url": "",
                  "color": "RANDOM",
                  "timestamp": "false",
                  "imageUrl": "",
                  "thumbUrl": "",
                  "description": "${slashParams(\"wiadomość\")}",
                  "fields": [],
                  "author": "",
                  "authorUrl": "",
                  "authorIcon": "",
                  "footerText": "${server.name}",
                  "footerIconUrl": ""
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
        },
        {
          "comparison": "1",
          "value": "2",
          "actions": [
            {
              "server": "0",
              "varName": "",
              "dataName": "modal.button",
              "defaultVal": "0",
              "storage": "1",
              "varName2": "button.nazwa",
              "name": "Store Server Data"
            },
            {
              "channel": "8",
              "varName": "channel",
              "message": "",
              "buttons": [
                {
                  "name": "${tempVars(\"button.nazwa\")}",
                  "type": "PRIMARY",
                  "id": "msg-button-modal2pytaniaXD",
                  "row": "",
                  "url": "",
                  "emoji": "",
                  "mode": "PERSISTENT",
                  "time": "",
                  "actions": [
                    {
                      "server": "0",
                      "varName": "",
                      "dataName": "modal.p1",
                      "defaultVal": "0",
                      "storage": "1",
                      "varName2": "p1",
                      "name": "Store Server Data"
                    },
                    {
                      "server": "0",
                      "varName": "",
                      "dataName": "modal.max2",
                      "defaultVal": "0",
                      "storage": "1",
                      "varName2": "max2",
                      "name": "Store Server Data"
                    },
                    {
                      "time": "1",
                      "measurement": "0",
                      "name": "Wait"
                    },
                    {
                      "server": "0",
                      "varName": "",
                      "dataName": "modal.min1",
                      "defaultVal": "0",
                      "storage": "1",
                      "varName2": "min1",
                      "name": "Store Server Data"
                    },
                    {
                      "server": "0",
                      "varName": "",
                      "dataName": "modal.min2",
                      "defaultVal": "0",
                      "storage": "1",
                      "varName2": "min2",
                      "name": "Store Server Data"
                    },
                    {
                      "server": "0",
                      "varName": "",
                      "dataName": "modal.p2",
                      "defaultVal": "0",
                      "storage": "1",
                      "varName2": "p2",
                      "name": "Store Server Data"
                    },
                    {
                      "time": "1",
                      "measurement": "0",
                      "name": "Wait"
                    },
                    {
                      "server": "0",
                      "varName": "",
                      "dataName": "modal.max1",
                      "defaultVal": "0",
                      "storage": "1",
                      "varName2": "max1",
                      "name": "Store Server Data"
                    },
                    {
                      "server": "0",
                      "varName": "",
                      "dataName": "modal.opis2",
                      "defaultVal": "0",
                      "storage": "1",
                      "varName2": "opis2",
                      "name": "Store Server Data"
                    },
                    {
                      "time": "1",
                      "measurement": "0",
                      "name": "Wait"
                    },
                    {
                      "server": "0",
                      "varName": "",
                      "dataName": "modal.opis1",
                      "defaultVal": "0",
                      "storage": "1",
                      "varName2": "opis1",
                      "name": "Store Server Data"
                    },
                    {
                      "server": "0",
                      "varName": "",
                      "dataName": "modal.title",
                      "defaultVal": "0",
                      "storage": "1",
                      "varName2": "title1",
                      "name": "Store Server Data"
                    },
                    {
                      "time": "1",
                      "measurement": "0",
                      "name": "Wait"
                    },
                    {
                      "server": "0",
                      "varName": "",
                      "dataName": "modal.channel.log",
                      "defaultVal": "",
                      "storage": "1",
                      "varName2": "log1",
                      "name": "Store Server Data"
                    },
                    {
                      "title": "${tempVars(\"title1\")}",
                      "textInputs": [
                        {
                          "name": "${tempVars(\"p1\")}",
                          "placeholder": "${tempVars(\"opis1\")}",
                          "minLength": "${tempVars(\"min1\")}",
                          "maxLength": "${tempVars(\"max1\")}",
                          "id": "pytanie1",
                          "row": "1",
                          "style": "SHORT",
                          "required": "true"
                        },
                        {
                          "name": "${tempVars(\"p2\")}",
                          "placeholder": "${tempVars(\"opis2\")}",
                          "minLength": "${tempVars(\"min2\")}",
                          "maxLength": "${tempVars(\"max2\")}",
                          "id": "pytanie2",
                          "row": "2",
                          "style": "PARAGRAPH",
                          "required": "true"
                        }
                      ],
                      "name": "Show Modal"
                    },
                    {
                      "channel": "0",
                      "varName": "",
                      "message": "Dziękujemy za wypełnienie!",
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
                      "channel": "103",
                      "varName": "${tempVars(\"log1\")}",
                      "message": "${member}",
                      "buttons": [],
                      "selectMenus": [],
                      "attachments": [],
                      "embeds": [
                        {
                          "title": "Odpowiedź na formularz",
                          "url": "",
                          "color": "RED",
                          "timestamp": "true",
                          "imageUrl": "",
                          "thumbUrl": "",
                          "description": "**__${tempVars(\"p1\")}__:**\n\n> `${tempVars(\"pytanie1\")}`\n\n**__${tempVars(\"p2\")}__:**\n\n> `${tempVars(\"pytanie2\")}`",
                          "fields": [],
                          "author": "",
                          "authorUrl": "",
                          "authorIcon": "",
                          "footerText": "",
                          "footerIconUrl": ""
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
                  "title": "${slashParams(\"tytuł\")}",
                  "url": "",
                  "color": "RANDOM",
                  "timestamp": "false",
                  "imageUrl": "",
                  "thumbUrl": "",
                  "description": "${slashParams(\"wiadomość\")}",
                  "fields": [],
                  "author": "",
                  "authorUrl": "",
                  "authorIcon": "",
                  "footerText": "${server.name}",
                  "footerIconUrl": ""
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
        },
        {
          "comparison": "1",
          "value": "3",
          "actions": [
            {
              "server": "0",
              "varName": "",
              "dataName": "modal.button",
              "defaultVal": "0",
              "storage": "1",
              "varName2": "button.nazwa",
              "name": "Store Server Data"
            },
            {
              "channel": "8",
              "varName": "channel",
              "message": "",
              "buttons": [
                {
                  "name": "${tempVars(\"button.nazwa\")}",
                  "type": "PRIMARY",
                  "id": "msg-button-modal3pytaniaXD",
                  "row": "",
                  "url": "",
                  "emoji": "",
                  "mode": "PERSISTENT",
                  "time": "",
                  "actions": [
                    {
                      "server": "0",
                      "varName": "",
                      "dataName": "modal.p2",
                      "defaultVal": "0",
                      "storage": "1",
                      "varName2": "p2",
                      "name": "Store Server Data"
                    },
                    {
                      "server": "0",
                      "varName": "",
                      "dataName": "modal.max3",
                      "defaultVal": "0",
                      "storage": "1",
                      "varName2": "max3",
                      "name": "Store Server Data"
                    },
                    {
                      "server": "0",
                      "varName": "",
                      "dataName": "modal.min3",
                      "defaultVal": "0",
                      "storage": "1",
                      "varName2": "min3",
                      "name": "Store Server Data"
                    },
                    {
                      "server": "0",
                      "varName": "",
                      "dataName": "modal.p3",
                      "defaultVal": "0",
                      "storage": "1",
                      "varName2": "p3",
                      "name": "Store Server Data"
                    },
                    {
                      "server": "0",
                      "varName": "",
                      "dataName": "modal.opis3",
                      "defaultVal": "0",
                      "storage": "1",
                      "varName2": "opis3",
                      "name": "Store Server Data"
                    },
                    {
                      "server": "0",
                      "varName": "",
                      "dataName": "modal.p1",
                      "defaultVal": "0",
                      "storage": "1",
                      "varName2": "p1",
                      "name": "Store Server Data"
                    },
                    {
                      "server": "0",
                      "varName": "",
                      "dataName": "modal.max2",
                      "defaultVal": "0",
                      "storage": "1",
                      "varName2": "max2",
                      "name": "Store Server Data"
                    },
                    {
                      "server": "0",
                      "varName": "",
                      "dataName": "modal.max1",
                      "defaultVal": "0",
                      "storage": "1",
                      "varName2": "max1",
                      "name": "Store Server Data"
                    },
                    {
                      "server": "0",
                      "varName": "",
                      "dataName": "modal.min1",
                      "defaultVal": "0",
                      "storage": "1",
                      "varName2": "min1",
                      "name": "Store Server Data"
                    },
                    {
                      "time": "1",
                      "measurement": "0",
                      "name": "Wait"
                    },
                    {
                      "time": "1",
                      "measurement": "0",
                      "name": "Wait"
                    },
                    {
                      "server": "0",
                      "varName": "",
                      "dataName": "modal.opis2",
                      "defaultVal": "0",
                      "storage": "1",
                      "varName2": "opis2",
                      "name": "Store Server Data"
                    },
                    {
                      "server": "0",
                      "varName": "",
                      "dataName": "modal.opis1",
                      "defaultVal": "0",
                      "storage": "1",
                      "varName2": "opis1",
                      "name": "Store Server Data"
                    },
                    {
                      "time": "1",
                      "measurement": "0",
                      "name": "Wait"
                    },
                    {
                      "server": "0",
                      "varName": "",
                      "dataName": "modal.min2",
                      "defaultVal": "0",
                      "storage": "1",
                      "varName2": "min2",
                      "name": "Store Server Data"
                    },
                    {
                      "time": "1",
                      "measurement": "0",
                      "name": "Wait"
                    },
                    {
                      "server": "0",
                      "varName": "",
                      "dataName": "modal.title",
                      "defaultVal": "0",
                      "storage": "1",
                      "varName2": "title1",
                      "name": "Store Server Data"
                    },
                    {
                      "time": "1",
                      "measurement": "0",
                      "name": "Wait"
                    },
                    {
                      "server": "0",
                      "varName": "",
                      "dataName": "modal.channel.log",
                      "defaultVal": "",
                      "storage": "1",
                      "varName2": "log1",
                      "name": "Store Server Data"
                    },
                    {
                      "title": "${tempVars(\"title1\")}",
                      "textInputs": [
                        {
                          "name": "${tempVars(\"p1\")}",
                          "placeholder": "${tempVars(\"opis1\")}",
                          "minLength": "${tempVars(\"min1\")}",
                          "maxLength": "${tempVars(\"max1\")}",
                          "id": "pytanie1",
                          "row": "1",
                          "style": "SHORT",
                          "required": "true"
                        },
                        {
                          "name": "${tempVars(\"p2\")}",
                          "placeholder": "${tempVars(\"opis2\")}",
                          "minLength": "${tempVars(\"min2\")}",
                          "maxLength": "${tempVars(\"max2\")}",
                          "id": "pytanie2",
                          "row": "2",
                          "style": "PARAGRAPH",
                          "required": "true"
                        },
                        {
                          "name": "${tempVars(\"p3\")}",
                          "placeholder": "${tempVars(\"opis3\")}",
                          "minLength": "${tempVars(\"min3\")}",
                          "maxLength": "${tempVars(\"max3\")}",
                          "id": "pytanie3",
                          "row": "3",
                          "style": "PARAGRAPH",
                          "required": "true"
                        }
                      ],
                      "name": "Show Modal"
                    },
                    {
                      "channel": "0",
                      "varName": "",
                      "message": "Dziękujemy za wypełnienie!",
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
                      "channel": "103",
                      "varName": "${tempVars(\"log1\")}",
                      "message": "${member}",
                      "buttons": [],
                      "selectMenus": [],
                      "attachments": [],
                      "embeds": [
                        {
                          "title": "Odpowiedź na formularz",
                          "url": "",
                          "color": "RED",
                          "timestamp": "true",
                          "imageUrl": "",
                          "thumbUrl": "",
                          "description": "**__${tempVars(\"p1\")}__:**\n\n> `${tempVars(\"pytanie1\")}`\n\n**__${tempVars(\"p2\")}__:**\n\n> `${tempVars(\"pytanie2\")}`\n\n**__${tempVars(\"p3\")}__:**\n\n> `${tempVars(\"pytanie3\")}`",
                          "fields": [],
                          "author": "",
                          "authorUrl": "",
                          "authorIcon": "",
                          "footerText": "",
                          "footerIconUrl": ""
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
                  "title": "${slashParams(\"tytuł\")}",
                  "url": "",
                  "color": "RANDOM",
                  "timestamp": "false",
                  "imageUrl": "",
                  "thumbUrl": "",
                  "description": "${slashParams(\"wiadomość\")}",
                  "fields": [],
                  "author": "",
                  "authorUrl": "",
                  "authorIcon": "",
                  "footerText": "${server.name}",
                  "footerIconUrl": ""
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
        },
        {
          "comparison": "1",
          "value": "4",
          "actions": [
            {
              "server": "0",
              "varName": "",
              "dataName": "modal.button",
              "defaultVal": "0",
              "storage": "1",
              "varName2": "button.nazwa",
              "name": "Store Server Data"
            },
            {
              "channel": "8",
              "varName": "channel",
              "message": "",
              "buttons": [
                {
                  "name": "${tempVars(\"button.nazwa\")}",
                  "type": "PRIMARY",
                  "id": "msg-button-modal4pytaniaXD",
                  "row": "",
                  "url": "",
                  "emoji": "",
                  "mode": "PERSISTENT",
                  "time": "",
                  "actions": [
                    {
                      "server": "0",
                      "varName": "",
                      "dataName": "modal.max4",
                      "defaultVal": "0",
                      "storage": "1",
                      "varName2": "max4",
                      "name": "Store Server Data"
                    },
                    {
                      "time": "1",
                      "measurement": "0",
                      "name": "Wait"
                    },
                    {
                      "server": "0",
                      "varName": "",
                      "dataName": "modal.max2",
                      "defaultVal": "0",
                      "storage": "1",
                      "varName2": "max2",
                      "name": "Store Server Data"
                    },
                    {
                      "server": "0",
                      "varName": "",
                      "dataName": "modal.min4",
                      "defaultVal": "0",
                      "storage": "1",
                      "varName2": "min4",
                      "name": "Store Server Data"
                    },
                    {
                      "server": "0",
                      "varName": "",
                      "dataName": "modal.max3",
                      "defaultVal": "0",
                      "storage": "1",
                      "varName2": "max3",
                      "name": "Store Server Data"
                    },
                    {
                      "server": "0",
                      "varName": "",
                      "dataName": "modal.min2",
                      "defaultVal": "0",
                      "storage": "1",
                      "varName2": "min2",
                      "name": "Store Server Data"
                    },
                    {
                      "server": "0",
                      "varName": "",
                      "dataName": "modal.p1",
                      "defaultVal": "0",
                      "storage": "1",
                      "varName2": "p1",
                      "name": "Store Server Data"
                    },
                    {
                      "time": "1",
                      "measurement": "0",
                      "name": "Wait"
                    },
                    {
                      "server": "0",
                      "varName": "",
                      "dataName": "modal.opis1",
                      "defaultVal": "0",
                      "storage": "1",
                      "varName2": "opis1",
                      "name": "Store Server Data"
                    },
                    {
                      "server": "0",
                      "varName": "",
                      "dataName": "modal.min3",
                      "defaultVal": "0",
                      "storage": "1",
                      "varName2": "min3",
                      "name": "Store Server Data"
                    },
                    {
                      "server": "0",
                      "varName": "",
                      "dataName": "modal.p4",
                      "defaultVal": "0",
                      "storage": "1",
                      "varName2": "p4",
                      "name": "Store Server Data"
                    },
                    {
                      "server": "0",
                      "varName": "",
                      "dataName": "modal.p3",
                      "defaultVal": "0",
                      "storage": "1",
                      "varName2": "p3",
                      "name": "Store Server Data"
                    },
                    {
                      "server": "0",
                      "varName": "",
                      "dataName": "modal.opis3",
                      "defaultVal": "0",
                      "storage": "1",
                      "varName2": "opis3",
                      "name": "Store Server Data"
                    },
                    {
                      "server": "0",
                      "varName": "",
                      "dataName": "modal.opis4",
                      "defaultVal": "0",
                      "storage": "1",
                      "varName2": "opis4",
                      "name": "Store Server Data"
                    },
                    {
                      "time": "1",
                      "measurement": "0",
                      "name": "Wait"
                    },
                    {
                      "server": "0",
                      "varName": "",
                      "dataName": "modal.min1",
                      "defaultVal": "0",
                      "storage": "1",
                      "varName2": "min1",
                      "name": "Store Server Data"
                    },
                    {
                      "server": "0",
                      "varName": "",
                      "dataName": "modal.max1",
                      "defaultVal": "0",
                      "storage": "1",
                      "varName2": "max1",
                      "name": "Store Server Data"
                    },
                    {
                      "server": "0",
                      "varName": "",
                      "dataName": "modal.opis2",
                      "defaultVal": "0",
                      "storage": "1",
                      "varName2": "opis2",
                      "name": "Store Server Data"
                    },
                    {
                      "server": "0",
                      "varName": "",
                      "dataName": "modal.p2",
                      "defaultVal": "0",
                      "storage": "1",
                      "varName2": "p2",
                      "name": "Store Server Data"
                    },
                    {
                      "time": "1",
                      "measurement": "0",
                      "name": "Wait"
                    },
                    {
                      "server": "0",
                      "varName": "",
                      "dataName": "modal.title",
                      "defaultVal": "0",
                      "storage": "1",
                      "varName2": "title1",
                      "name": "Store Server Data"
                    },
                    {
                      "time": "1",
                      "measurement": "0",
                      "name": "Wait"
                    },
                    {
                      "server": "0",
                      "varName": "",
                      "dataName": "modal.channel.log",
                      "defaultVal": "",
                      "storage": "1",
                      "varName2": "log1",
                      "name": "Store Server Data"
                    },
                    {
                      "title": "${tempVars(\"title1\")}",
                      "textInputs": [
                        {
                          "name": "${tempVars(\"p1\")}",
                          "placeholder": "${tempVars(\"opis1\")}",
                          "minLength": "${tempVars(\"min1\")}",
                          "maxLength": "${tempVars(\"max1\")}",
                          "id": "pytanie1",
                          "row": "1",
                          "style": "SHORT",
                          "required": "true"
                        },
                        {
                          "name": "${tempVars(\"p2\")}",
                          "placeholder": "${tempVars(\"opis2\")}",
                          "minLength": "${tempVars(\"min2\")}",
                          "maxLength": "${tempVars(\"max2\")}",
                          "id": "pytanie2",
                          "row": "2",
                          "style": "PARAGRAPH",
                          "required": "true"
                        },
                        {
                          "name": "${tempVars(\"p3\")}",
                          "placeholder": "${tempVars(\"opis3\")}",
                          "minLength": "${tempVars(\"min3\")}",
                          "maxLength": "${tempVars(\"max3\")}",
                          "id": "pytanie3",
                          "row": "3",
                          "style": "PARAGRAPH",
                          "required": "true"
                        },
                        {
                          "name": "${tempVars(\"p4\")}",
                          "placeholder": "${tempVars(\"opis4\")}",
                          "minLength": "${tempVars(\"min4\")}",
                          "maxLength": "${tempVars(\"max4\")}",
                          "id": "pytanie4",
                          "row": "4",
                          "style": "PARAGRAPH",
                          "required": "true"
                        }
                      ],
                      "name": "Show Modal"
                    },
                    {
                      "channel": "0",
                      "varName": "",
                      "message": "Dziękujemy za wypełnienie!",
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
                      "channel": "103",
                      "varName": "${tempVars(\"log1\")}",
                      "message": "${member}",
                      "buttons": [],
                      "selectMenus": [],
                      "attachments": [],
                      "embeds": [
                        {
                          "title": "Odpowiedź na formularz",
                          "url": "",
                          "color": "RED",
                          "timestamp": "true",
                          "imageUrl": "",
                          "thumbUrl": "",
                          "description": "**__${tempVars(\"p1\")}__:**\n\n> `${tempVars(\"pytanie1\")}`\n\n**__${tempVars(\"p2\")}__:**\n\n> `${tempVars(\"pytanie2\")}`\n\n**__${tempVars(\"p3\")}__:**\n\n> `${tempVars(\"pytanie3\")}`\n\n**__${tempVars(\"p4\")}__:**\n\n> `${tempVars(\"pytanie4\")}`",
                          "fields": [],
                          "author": "",
                          "authorUrl": "",
                          "authorIcon": "",
                          "footerText": "",
                          "footerIconUrl": ""
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
                  "title": "${slashParams(\"tytuł\")}",
                  "url": "",
                  "color": "RANDOM",
                  "timestamp": "false",
                  "imageUrl": "",
                  "thumbUrl": "",
                  "description": "${slashParams(\"wiadomość\")}",
                  "fields": [],
                  "author": "",
                  "authorUrl": "",
                  "authorIcon": "",
                  "footerText": "${server.name}",
                  "footerIconUrl": ""
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
        },
        {
          "comparison": "1",
          "value": "5",
          "actions": [
            {
              "server": "0",
              "varName": "",
              "dataName": "modal.button",
              "defaultVal": "0",
              "storage": "1",
              "varName2": "button.nazwa",
              "name": "Store Server Data"
            },
            {
              "channel": "8",
              "varName": "channel",
              "message": "",
              "buttons": [
                {
                  "name": "${tempVars(\"button.nazwa\")}",
                  "type": "DANGER",
                  "id": "lkashdoasgdousa9jh",
                  "row": "",
                  "url": "",
                  "emoji": "",
                  "mode": "PERSISTENT",
                  "time": "",
                  "actions": [
                    {
                      "server": "0",
                      "varName": "",
                      "dataName": "modal.min4",
                      "defaultVal": "0",
                      "storage": "1",
                      "varName2": "min4",
                      "name": "Store Server Data"
                    },
                    {
                      "server": "0",
                      "varName": "",
                      "dataName": "modal.p5",
                      "defaultVal": "0",
                      "storage": "1",
                      "varName2": "p5",
                      "name": "Store Server Data"
                    },
                    {
                      "server": "0",
                      "varName": "",
                      "dataName": "modal.min5",
                      "defaultVal": "0",
                      "storage": "1",
                      "varName2": "min5",
                      "name": "Store Server Data"
                    },
                    {
                      "server": "0",
                      "varName": "",
                      "dataName": "modal.p1",
                      "defaultVal": "0",
                      "storage": "1",
                      "varName2": "p1",
                      "name": "Store Server Data"
                    },
                    {
                      "server": "0",
                      "varName": "",
                      "dataName": "modal.max1",
                      "defaultVal": "0",
                      "storage": "1",
                      "varName2": "max1",
                      "name": "Store Server Data"
                    },
                    {
                      "server": "0",
                      "varName": "",
                      "dataName": "modal.p3",
                      "defaultVal": "0",
                      "storage": "1",
                      "varName2": "p3",
                      "name": "Store Server Data"
                    },
                    {
                      "server": "0",
                      "varName": "",
                      "dataName": "modal.max5",
                      "defaultVal": "0",
                      "storage": "1",
                      "varName2": "max5",
                      "name": "Store Server Data"
                    },
                    {
                      "server": "0",
                      "varName": "",
                      "dataName": "modal.min3",
                      "defaultVal": "0",
                      "storage": "1",
                      "varName2": "min3",
                      "name": "Store Server Data"
                    },
                    {
                      "server": "0",
                      "varName": "",
                      "dataName": "modal.opis3",
                      "defaultVal": "0",
                      "storage": "1",
                      "varName2": "opis3",
                      "name": "Store Server Data"
                    },
                    {
                      "server": "0",
                      "varName": "",
                      "dataName": "modal.max2",
                      "defaultVal": "0",
                      "storage": "1",
                      "varName2": "max2",
                      "name": "Store Server Data"
                    },
                    {
                      "server": "0",
                      "varName": "",
                      "dataName": "modal.opis4",
                      "defaultVal": "0",
                      "storage": "1",
                      "varName2": "opis4",
                      "name": "Store Server Data"
                    },
                    {
                      "server": "0",
                      "varName": "",
                      "dataName": "modal.p4",
                      "defaultVal": "0",
                      "storage": "1",
                      "varName2": "p4",
                      "name": "Store Server Data"
                    },
                    {
                      "server": "0",
                      "varName": "",
                      "dataName": "modal.opis1",
                      "defaultVal": "0",
                      "storage": "1",
                      "varName2": "opis1",
                      "name": "Store Server Data"
                    },
                    {
                      "server": "0",
                      "varName": "",
                      "dataName": "modal.min1",
                      "defaultVal": "0",
                      "storage": "1",
                      "varName2": "min1",
                      "name": "Store Server Data"
                    },
                    {
                      "server": "0",
                      "varName": "",
                      "dataName": "modal.p2",
                      "defaultVal": "0",
                      "storage": "1",
                      "varName2": "p2",
                      "name": "Store Server Data"
                    },
                    {
                      "server": "0",
                      "varName": "",
                      "dataName": "modal.max4",
                      "defaultVal": "0",
                      "storage": "1",
                      "varName2": "max4",
                      "name": "Store Server Data"
                    },
                    {
                      "server": "0",
                      "varName": "",
                      "dataName": "modal.opis5",
                      "defaultVal": "0",
                      "storage": "1",
                      "varName2": "opis5",
                      "name": "Store Server Data"
                    },
                    {
                      "server": "0",
                      "varName": "",
                      "dataName": "modal.min2",
                      "defaultVal": "0",
                      "storage": "1",
                      "varName2": "min2",
                      "name": "Store Server Data"
                    },
                    {
                      "server": "0",
                      "varName": "",
                      "dataName": "modal.max3",
                      "defaultVal": "0",
                      "storage": "1",
                      "varName2": "max3",
                      "name": "Store Server Data"
                    },
                    {
                      "server": "0",
                      "varName": "",
                      "dataName": "modal.title",
                      "defaultVal": "0",
                      "storage": "1",
                      "varName2": "title1",
                      "name": "Store Server Data"
                    },
                    {
                      "server": "0",
                      "varName": "",
                      "dataName": "modal.opis2",
                      "defaultVal": "0",
                      "storage": "1",
                      "varName2": "opis2",
                      "name": "Store Server Data"
                    },
                    {
                      "server": "0",
                      "varName": "",
                      "dataName": "modal.channel.log",
                      "defaultVal": "",
                      "storage": "1",
                      "varName2": "log1",
                      "name": "Store Server Data"
                    },
                    {
                      "title": "${tempVars(\"title1\")}",
                      "textInputs": [
                        {
                          "name": "${tempVars(\"p1\")}",
                          "placeholder": "${tempVars(\"opis1\")}",
                          "minLength": "${tempVars(\"min1\")}",
                          "maxLength": "${tempVars(\"max1\")}",
                          "id": "pytanie1",
                          "row": "1",
                          "style": "SHORT",
                          "required": "true"
                        },
                        {
                          "name": "${tempVars(\"p2\")}",
                          "placeholder": "${tempVars(\"opis2\")}",
                          "minLength": "${tempVars(\"min2\")}",
                          "maxLength": "${tempVars(\"max2\")}",
                          "id": "pytanie2",
                          "row": "2",
                          "style": "PARAGRAPH",
                          "required": "true"
                        },
                        {
                          "name": "${tempVars(\"p3\")}",
                          "placeholder": "${tempVars(\"opis3\")}",
                          "minLength": "${tempVars(\"min3\")}",
                          "maxLength": "${tempVars(\"max3\")}",
                          "id": "pytanie3",
                          "row": "3",
                          "style": "PARAGRAPH",
                          "required": "true"
                        },
                        {
                          "name": "${tempVars(\"p4\")}",
                          "placeholder": "${tempVars(\"opis4\")}",
                          "minLength": "${tempVars(\"min4\")}",
                          "maxLength": "${tempVars(\"max4\")}",
                          "id": "pytanie4",
                          "row": "4",
                          "style": "PARAGRAPH",
                          "required": "true"
                        },
                        {
                          "name": "${tempVars(\"p5\")}",
                          "placeholder": "${tempVars(\"opis5\")}",
                          "minLength": "${tempVars(\"min5\")}",
                          "maxLength": "${tempVars(\"max5\")}",
                          "id": "pytanie5",
                          "row": "5",
                          "style": "PARAGRAPH",
                          "required": "true"
                        }
                      ],
                      "name": "Show Modal"
                    },
                    {
                      "channel": "0",
                      "varName": "",
                      "message": "Dziękujemy za wypełnienie!",
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
                      "channel": "103",
                      "varName": "${tempVars(\"log1\")}",
                      "message": "${member}",
                      "buttons": [],
                      "selectMenus": [],
                      "attachments": [],
                      "embeds": [
                        {
                          "title": "Odpowiedź na formularz",
                          "url": "",
                          "color": "RED",
                          "timestamp": "true",
                          "imageUrl": "",
                          "thumbUrl": "",
                          "description": "**__${tempVars(\"p1\")}__:**\n\n> `${tempVars(\"pytanie1\")}`\n\n**__${tempVars(\"p2\")}__:**\n\n> `${tempVars(\"pytanie2\")}`\n\n**__${tempVars(\"p3\")}__:**\n\n> `${tempVars(\"pytanie3\")}`\n\n**__${tempVars(\"p4\")}__:**\n\n> `${tempVars(\"pytanie4\")}`\n\n**__${tempVars(\"p5\")}__:**\n\n> `${tempVars(\"pytanie5\")}`",
                          "fields": [],
                          "author": "",
                          "authorUrl": "",
                          "authorIcon": "",
                          "footerText": "",
                          "footerIconUrl": ""
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
                  "title": "${slashParams(\"tytuł\")}",
                  "url": "",
                  "color": "RANDOM",
                  "timestamp": "false",
                  "imageUrl": "",
                  "thumbUrl": "",
                  "description": "${slashParams(\"wiadomość\")}",
                  "fields": [],
                  "author": "",
                  "authorUrl": "",
                  "authorIcon": "",
                  "footerText": "${server.name}",
                  "footerIconUrl": ""
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
      "name": "Multi-Check Variable"
    }
  ],
  "comType": "4",
  "parameters": [
    {
      "name": "channel",
      "description": "",
      "type": "CHANNEL",
      "required": true,
      "choices": null
    },
    {
      "name": "tytuł",
      "description": "podaj tytuł embeda",
      "type": "STRING",
      "required": true,
      "choices": null
    },
    {
      "name": "wiadomość",
      "description": "wiadomość embeda",
      "type": "STRING",
      "required": true,
      "choices": null
    }
  ]
}