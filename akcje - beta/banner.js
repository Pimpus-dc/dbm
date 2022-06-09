module.exports = {
    //---------------------------------------------------------------------
    // Action Name
    //
    // This is the name of the action displayed in the editor.
    //---------------------------------------------------------------------
  
    name: "Banner",
  
    //---------------------------------------------------------------------
    // Action Section
    //
    // This is the section the action will fall into.
    //---------------------------------------------------------------------
  
    section: "Discord Bots Poland",
  
    //---------------------------------------------------------------------
    // Action Subtitle
    //
    // This function generates the subtitle displayed next to the name.
    //---------------------------------------------------------------------
  
    subtitle(data, presets) {
      const info = [
        "Member Banner",
      ];
      return `${presets.getMemberText(data.member, data.varName)} - ${info[parseInt(data.info, 10)]}`;
    },
  
    //---------------------------------------------------------------------
    // Action Storage Function
    //
    // Stores the relevant variable info for the editor.
    //---------------------------------------------------------------------
  
    variableStorage(data, varType) {
      const type = parseInt(data.storage, 10);
      if (type !== varType) return;
      const info = parseInt(data.info, 10);
      let dataType = "Unknown Type";
      switch (info) {
        case 0:
          dataType = "Image URL";
          break;
      }
      return [data.varName2, dataType];
    },
  

  
    meta: { version: "2.1.4", preciseCheck: true, author: "Gotowka", authorUrl: "https://github.com/gotowka", downloadUrl: "https://github.com/gotowka" },
  

  
    fields: ["member", "varName", "info", "storage", "varName2"],
  

  
    html(isEvent, data) {
      return `
      <member-input dropdownLabel="Source Member" selectId="member" variableContainerId="varNameContainer" variableInputId="varName"></member-input>
  
  <br><br><br>
  
  <div style="padding-top: 8px;">
      <span class="dbminputlabel">Source Info</span><br>
      <select id="info" class="round">
      <option value="0">Member Banner</option>
      </select>
  </div>
  
  <br>
  
  <store-in-variable dropdownLabel="Store In" selectId="storage" variableContainerId="varNameContainer2" variableInputId="varName2"></store-in-variable>`;
    },
  
    //---------------------------------------------------------------------
    // Action Editor Init Code
    //
    // When the HTML is first applied to the action editor, this code
    // is also run. This helps add modifications or setup reactionary
    // functions for the DOM elements.
    //---------------------------------------------------------------------
  
    init() {},
  
    //---------------------------------------------------------------------
    // Action Bot Function
    //
    // This is the function for the action within the Bot's Action class.
    // Keep in mind event calls won't have access to the "msg" parameter,
    // so be sure to provide checks for variable existence.
    //---------------------------------------------------------------------
  
    async action(cache) {
      const data = cache.actions[cache.index];
      const member = await this.getMemberFromData(data.member, data.varName, cache);
  
      if (!member) {
        this.callNextAction(cache);
        return;
      }
  
      const info = parseInt(data.info, 10);
  
      let result;
      switch (info) {
        case 0:
          if (member) {
            const user = await member.user.fetch();
            result = member.user.bannerURL({ fomart: "png", size: 4096, dynamic: true });
      }
            break;
        default:
          break;
      }
  
      if (result !== undefined) {
        const storage = parseInt(data.storage, 10);
        const varName2 = this.evalMessage(data.varName2, cache);
        this.storeValue(result, storage, varName2, cache);
      }
  
      this.callNextAction(cache);
    },
  
    //---------------------------------------------------------------------
    // Action Bot Mod
    //
    // Upon initialization of the bot, this code is run. Using the bot's
    // DBM namespace, one can add/modify existing functions if necessary.
    // In order to reduce conflicts between mods, be sure to alias
    // functions you wish to overwrite.
    //---------------------------------------------------------------------
  
    mod() {},
  };
  
