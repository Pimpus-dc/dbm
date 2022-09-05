{
  "name": "Kostka",
  "permissions": "NONE",
  "permissions2": "NONE",
  "restriction": "1",
  "_id": "eYvTH",
  "actions": [
    {
      "storage": "1",
      "varName": "oczka",
      "min": "1",
      "max": "6",
      "name": "Generate Random Number"
    },
    {
      "channel": "0",
      "varName": "",
      "message": "",
      "buttons": [],
      "selectMenus": [
        {
          "placeholder": "🎲 | Wybierz ",
          "id": "msg-select-9184ca5",
          "tempVarName": "wybor_select",
          "row": "",
          "min": "1",
          "max": "1",
          "mode": "PERSONAL",
          "time": "",
          "options": [
            {
              "label": "🎲 | numer 1",
              "description": "Wybierz numer 1",
              "value": "1",
              "emoji": "",
              "default": "false"
            },
            {
              "label": "🎲 | numer 2",
              "description": "Wybierz numer 2",
              "value": "2",
              "emoji": "",
              "default": "false"
            },
            {
              "label": "🎲 | numer 3",
              "description": "Wybierz numer 3",
              "value": "3",
              "emoji": "",
              "default": "false"
            },
            {
              "label": "🎲 | numer 4",
              "description": "Wybierz numer 4",
              "value": "4",
              "emoji": "",
              "default": "false"
            },
            {
              "label": "🎲 | numer 5",
              "description": "Wybierz numer 5",
              "value": "5",
              "emoji": "",
              "default": "false"
            },
            {
              "label": "🎲 | numer 6",
              "description": "Wybierz numer 6",
              "value": "6",
              "emoji": "",
              "default": "false"
            }
          ],
          "actions": [
            {
              "storage": "0",
              "varName": "",
              "reason": "",
              "name": "Delete Message"
            },
            {
              "storage": "1",
              "varName": "oczka",
              "min": "1",
              "max": "6",
              "name": "Generate Random Number"
            },
            {
              "storage": "1",
              "varName": "wybor_select",
              "comparison": "1",
              "value": "tempVars(\"oczka\")",
              "branch": {
                "iftrue": "0",
                "iffalse": "3",
                "iffalseVal": "2"
              },
              "name": "Check Variable"
            },
            {
              "channel": "0",
              "varName": "",
              "message": "",
              "buttons": [
                {
                  "name": "Okey, usuń wiadomość",
                  "type": "SUCCESS",
                  "id": "msg-button-78e26d8",
                  "row": "",
                  "url": "",
                  "emoji": "",
                  "mode": "MULTI",
                  "time": "",
                  "actions": [
                    {
                      "storage": "0",
                      "varName": "",
                      "reason": "",
                      "name": "Delete Message"
                    },
                    {
                      "channel": "0",
                      "varName": "",
                      "message": "Wykonano. Gratulację wygranej. Mamy nadzieję że ci się podobała gra w kostkę :D",
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
                    }
                  ]
                }
              ],
              "selectMenus": [],
              "attachments": [],
              "embeds": [
                {
                  "title": "***Gra w kostke***",
                  "url": "",
                  "color": "#00f2ff",
                  "timestamp": "false",
                  "imageUrl": "",
                  "thumbUrl": "",
                  "description": "> 🎲 wypadła liczba: ${tempVars(\"oczka\")}\n\n> 🎲 Wybrałeś ${tempVars(\"wybor_select\")}\n\n```\nWygrałeś ! Wybrałeś tą samą liczbe co wypadła\n```",
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
            },
            {
              "name": "End Action Sequence"
            },
            {
              "channel": "0",
              "varName": "",
              "message": "",
              "buttons": [
                {
                  "name": "okey, usuń wiadomość.",
                  "type": "DANGER",
                  "id": "msg-button-feceaca",
                  "row": "",
                  "url": "",
                  "emoji": "",
                  "mode": "MULTI",
                  "time": "",
                  "actions": [
                    {
                      "storage": "0",
                      "varName": "",
                      "reason": "",
                      "name": "Delete Message"
                    },
                    {
                      "channel": "0",
                      "varName": "",
                      "message": "Wykonano. Mamy nadzieję że gra w kostkę ci się spodobała!",
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
                    }
                  ]
                }
              ],
              "selectMenus": [],
              "attachments": [],
              "embeds": [
                {
                  "title": "***Gra w kostke***",
                  "url": "",
                  "color": "#00f2ff",
                  "timestamp": "false",
                  "imageUrl": "",
                  "thumbUrl": "",
                  "description": "> 🎲 wypadła liczba: ${tempVars(\"oczka\")}\n> 🎲 Wybrałeś: ${tempVars(\"wybor_select\")}\n\n```\nPrzegrałeś ! Nie wybrałeś tej samej liczby co wypadłą :(\n```",
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
            },
            {
              "storage": "1",
              "varName": "wybor_select",
              "type": "all",
              "disable": "disable",
              "searchValue": "",
              "name": "Disable Buttons and Selects"
            }
          ]
        }
      ],
      "attachments": [],
      "embeds": [],
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
  "description": "Gra w koste.",
  "parameters": []
}