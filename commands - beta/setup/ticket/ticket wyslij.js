{
  "name": "ticket wyslij",
  "permissions": "NONE",
  "permissions2": "NONE",
  "restriction": "1",
  "_id": "cTMVB",
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
      "server": "0",
      "varName": "",
      "dataName": "ticket.sprawdzanie",
      "comparison": "1",
      "value": "1",
      "branch": {
        "iftrue": "3",
        "iffalse": "0",
        "iftrueVal": "2"
      },
      "name": "Check Server Data"
    },
    {
      "channel": "0",
      "varName": "",
      "message": "Błąd: Nie ustawiłeś*aś `/setup ticket`",
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
      "name": "End Action Sequence"
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
      "defaultVal": "0",
      "storage": "1",
      "varName2": "modal.info",
      "name": "Store Server Data"
    },
    {
      "channel": "0",
      "varName": "",
      "message": "✅ Pomyślnie wysłano (${slashParams(\"kanał\")})",
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
      "server": "0",
      "varName": "",
      "dataName": "tresc.ticket",
      "changeType": "0",
      "value": "slashParams(\"treść\")",
      "name": "Control Server Data"
    },
    {
      "storage": "1",
      "varName": "modal.info",
      "branches": [
        {
          "comparison": "1",
          "value": "1",
          "actions": [
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
              "dataName": "tresc.ticket",
              "defaultVal": "0",
              "storage": "1",
              "varName2": "tresc",
              "name": "Store Server Data"
            },
            {
              "server": "0",
              "varName": "",
              "dataName": "title.ticket",
              "defaultVal": "0",
              "storage": "1",
              "varName2": "title",
              "name": "Store Server Data"
            },
            {
              "server": "0",
              "varName": "",
              "dataName": "ticket.kolor",
              "defaultVal": "0",
              "storage": "1",
              "varName2": "kolor",
              "name": "Store Server Data"
            },
            {
              "channel": "8",
              "varName": "kanał",
              "message": "",
              "buttons": [
                {
                  "name": "${slashParams(\"Nazwa_przycisku\")}",
                  "type": "PRIMARY",
                  "id": "modal.ticketsetup.xD",
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
                      "title": "Ticket",
                      "textInputs": [
                        {
                          "name": "Opisz swój problem",
                          "placeholder": "Tutaj napisz",
                          "minLength": "10",
                          "maxLength": "1024",
                          "id": "odpowiedz.ticket.modal",
                          "row": "1",
                          "style": "PARAGRAPH",
                          "required": "true"
                        }
                      ],
                      "name": "Show Modal"
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
                      "server": "0",
                      "varName": "957672571044761680",
                      "info": "5",
                      "storage": "1",
                      "varName2": "icon",
                      "name": "Store Server Info"
                    },
                    {
                      "member": "1",
                      "varName": "",
                      "info": "2",
                      "storage": "1",
                      "varName2": "username.ticket",
                      "name": "Store Member Info"
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
                      "channelName": "ticket-${tempVars(\"username.ticket\")}",
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
                          "author": "Wykonano!",
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
                          "id": "msg-button-54e603f",
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
                          "description": "${tempVars(\"tresc.tt\")}\n\nOdpowiedź ${member}:\n\n> ${tempVars(\"odpowiedz.ticket.modal\")}",
                          "fields": [],
                          "author": "Ticket został utworzony!",
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
                  "color": "${tempVars(\"kolor\")}",
                  "timestamp": "false",
                  "imageUrl": "",
                  "thumbUrl": "",
                  "description": "${tempVars(\"tresc\")}",
                  "fields": [],
                  "author": "${tempVars(\"title\")}",
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
            }
          ]
        },
        {
          "comparison": "1",
          "value": "2",
          "actions": [
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
              "dataName": "tresc.ticket",
              "defaultVal": "0",
              "storage": "1",
              "varName2": "tresc",
              "name": "Store Server Data"
            },
            {
              "server": "0",
              "varName": "",
              "dataName": "title.ticket",
              "defaultVal": "0",
              "storage": "1",
              "varName2": "title",
              "name": "Store Server Data"
            },
            {
              "server": "0",
              "varName": "",
              "dataName": "ticket.kolor",
              "defaultVal": "0",
              "storage": "1",
              "varName2": "kolor",
              "name": "Store Server Data"
            },
            {
              "channel": "8",
              "varName": "kanał",
              "message": "",
              "buttons": [
                {
                  "name": "${slashParams(\"Nazwa_przycisku\")}",
                  "type": "PRIMARY",
                  "id": "msg-button-cc497f9",
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
                      "member": "1",
                      "varName": "",
                      "info": "2",
                      "storage": "1",
                      "varName2": "username.ticket",
                      "name": "Store Member Info"
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
                      "channelName": "ticket-${tempVars(\"username.ticket\")}",
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
                          "author": "Ticket został utworzony!",
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
                  "color": "${tempVars(\"kolor\")}",
                  "timestamp": "false",
                  "imageUrl": "",
                  "thumbUrl": "",
                  "description": "${tempVars(\"tresc\")}",
                  "fields": [],
                  "author": "${tempVars(\"title\")}",
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
            }
          ]
        }
      ],
      "name": "Multi-Check Variable"
    }
  ],
  "comType": "4",
  "description": "Wyślij ticketa",
  "parameters": [
    {
      "name": "Nazwa_przycisku",
      "description": "Podaj nazwę przycisku",
      "type": "STRING",
      "required": true,
      "choices": null
    },
    {
      "name": "treść",
      "description": "podaj treść embeda",
      "type": "STRING",
      "required": true,
      "choices": null
    },
    {
      "name": "tytuł",
      "description": "podaj tytułembeda",
      "type": "STRING",
      "required": true,
      "choices": null
    },
    {
      "name": "kanał",
      "description": "Podaj kanał na który ma wysłać wiadomość",
      "type": "CHANNEL",
      "required": true,
      "choices": null
    }
  ]
}
