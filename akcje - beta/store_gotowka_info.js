const { MessageEmbed } = require("discord.js");

module.exports = {
  //---------------------------------------------------------------------
  // Action Name
  //
  // This is the name of the action displayed in the editor.
  //---------------------------------------------------------------------

  name: "Store Gotowka Info",

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
    const channelTypes = [
      "Server Info",
      "Member info",
    ];
    return `Akcja stworzona przez money#6283`;
  },

  variableStorage(data, varType) {
    const type = parseInt(data.storage, 10);
    if (type !== varType) return;
    const info = parseInt(data.info, 10);
    const info2 = parseInt(data.info2, 10)
    let dataType = "Unknown Type";
    switch (info) {
      case 1:
        dataType = "Bans Count";
        break;
    }
    switch (info2) {
      case 1:
        dataType = "Banner URL";
        break;
    }
    return [data.varName, dataType];
  },



  meta: { version: "2.1.4", preciseCheck: true, author: 'Gotowka', authorUrl: 'https://github.com/Gotowka/autorskieakcje/blob/main/store_gotowa_info.js', downloadUrl: 'https://github.com/Gotowka/autorskieakcje/blob/main/store_gotowa_info.js' },



  fields: ["storage", "varName", "server", "varName2", "member", "varName3", "information", "info", "info2"],



  html(isEvent, data) {
    return `


<store-in-variable dropdownLabel="Store In" selectId="storage" variableContainerId="varNameContainer2" variableInputId="varName"></store-in-variable>
<br><br><br>
<member-input dropdownLabel="Source Member" selectId="member" variableContainerId="varNameContainer" variableInputId="varName"></member-input>
<br><br><br>
<server-input dropdownLabel="Server" selectId="server" variableContainerId="varNameContainer" variableInputId="varName2"></server-input><br>
<br><br>

<tab-system exclusiveTabData spreadOut id="information">
  <tab label="Server Info" icon="sort alphabet down">
    <div style="padding: 8px;">
      <div style="float: left; width: calc(100% - 12px);">

        <span class="dbminputlabel">Info</span><br>
        <select id="info" class="round">
          <option value="1" selected>Bans Count</option>
          <option value="0" selected>Null</option>
        </select>
      </div>

      <br><br><br><br><br><br>
    </div>
  </tab>

  <tab label="Member Info" icon="assistive listening systems">
    <div style="padding: 8px;">
      <div style="float: left; width: calc(100% - 12px);">

        <span class="dbminputlabel">Info</span><br>
        <select id="info2" class="round">
        <option value="0" selected>Null</option>
          <option value="2" selected>Banner URL</option>
          <option value="1" selected>Null</option>
        </select>
      </div>

      <br><br><br><br><br><br>
    </div>
  </tab>

</tab-system>`;
  },



  init() {},



  async action(cache) {
    const data = cache.actions[cache.index];
    const check = parseInt(data.info, 10);
    const check2 = parseInt(data.info2, 10);
    const interaction = cache.interaction;
    const msg = cache.msg;
    const guild = await this.getServerFromData(data.server, data.varName2, cache)
    const member = await this.getMemberFromData(data.member, data.varName3, cache);
    if (!member) {
      this.callNextAction(cache);
      return;
    }
    let result
    if (check == 0) {
      if (check2 === '0') {
      } else {
        switch (check2) {
          case 0:
            break;
          case 2: 
          if (member) {
            const user = await member.user.fetch({ cache: true });
            result = member.user.bannerURL({ fomart: "png", size: 4096, dynamic: true });
      }
          break;
          case 1:
            break;
          default:
            break;
        }
      }
    } else {
      switch (check) {
        case 1:
            await guild.bans.fetch({ cache: true });
            result = guild.bans.cache.size;
          break;
      }
    }

    setTimeout(() => {
      if (result !== undefined) {
        const storage = parseInt(data.storage, 10);
        const varName = this.evalMessage(data.varName, cache);
        this.storeValue(result, storage, varName, cache);
      }

      if (result !== undefined) {
        const storage = parseInt(data.storage, 10);
        const varName = this.evalMessage(data.varName, cache);
        this.storeValue(result, storage, varName, cache);
        this.callNextAction(cache)
      } else {
        console.log('Błąd: Wybierz opcje w akcji store gotowka info')
        const embederror = new MessageEmbed()
        .setAuthor({ name: 'Błąd!', iconURL: 'https://cdn.discordapp.com/attachments/973602951518093333/979866533411045486/4247-off.png'})
        .setDescription(`> Zgłoś błąd właścicielowi bota!`)
        .setColor('RED')
        if (interaction) embederror.setFooter({ text: `${interaction.member.user.username} (${interaction.member.id})`, iconURL: interaction.member.user.avatarURL({ dynamic: true }) })
        if (msg) embederror.setFooter({ text: `${msg.member.user.username} (${msg.member.id})`, iconURL: msg.member.user.avatarURL({ dynamic: true }) })
        if (cache.interaction) {
          interaction.reply({ embeds: [embederror], ephemeral: true })
        } else {
          msg.reply({ embeds: [embederror], allowedMentions: { repliedUser: false } })
        }

      }
    }, 1000);



  },

  mod() {},
};
