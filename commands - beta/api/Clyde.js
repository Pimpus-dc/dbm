{
  "name": "4fun Clyde",
  "permissions": "NONE",
  "permissions2": "NONE",
  "restriction": "1",
  "_id": "XywQy",
  "actions": [
    {
      "token": "",
      "user": "",
      "pass": "",
      "url": "https://nekobot.xyz/api/imagegen?type=clyde&text=${slashParams(\"treść\")}",
      "path": "message",
      "storage": "1",
      "varName": "message",
      "debugMode": "1",
      "headers": "",
      "reUse": "1",
      "name": "Store Json From WebAPI"
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
      "member": "1",
      "varName": "",
      "info": "2",
      "storage": "1",
      "varName2": "member.username.command",
      "name": "Store Member Info"
    },
    {
      "member": "1",
      "varName": "",
      "info": "1",
      "storage": "1",
      "varName2": "member.id.command",
      "name": "Store Member Info"
    },
    {
      "member": "1",
      "varName": "",
      "info": "16",
      "storage": "1",
      "varName2": "member.avatar.command",
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
          "title": "",
          "url": "",
          "color": "YELLOW",
          "timestamp": "true",
          "imageUrl": "${tempVars(\"message\")}",
          "thumbUrl": "",
          "description": "",
          "fields": [],
          "author": "Wygenerowałem...",
          "authorUrl": "",
          "authorIcon": "${tempVars(\"icon\")}",
          "footerText": "${tempVars(\"member.username.command\")} (${tempVars(\"member.id.command\")})\n",
          "footerIconUrl": "${tempVars(\"member.avatar.command\")}"
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
      "name": "treść",
      "description": "Podaj treść tekstu, jaką ma wysłać strażnik Clyde!",
      "type": "STRING",
      "required": true,
      "choices": null
    }
  ],
  "description": "Wiadomość strażnika Clyde!"
}