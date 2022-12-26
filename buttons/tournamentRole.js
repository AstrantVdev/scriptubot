const { SlashCommandBuilder, PermissionFlagsBits } = require("discord.js");
const editJsonFile = require("edit-json-file")
const dataConfig = editJsonFile("DATA_CONFIG.json")

module.exports = {
	data: new SlashCommandBuilder()
	.setName("button")
    .setDescription("Create a button")
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
	.addStringOption(option =>
		option.setName("name")
			.setDescription("Button's name")
			.addChoices(
				{ name: "tournamentRole", value: "1" }
			)), 

	async execute(interaction) {
        const value = interaction.options.getString("name")

        switch(value){
            case "1":
                await interaction.channel.send({content : `Appuis sur ce bouton pour avoir le rôle ${dataConfig.get("roleId.tournament")} :`
                , components: await this.tournamentRole()})
        }
        
		await interaction.reply({ content: "Action accomplie avec succès ! :D", ephemeral: true })

	},

    tournamentRole(){
        const sprintRole = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
                .setCustomId("tournamentRole")
                .setEmoji("1056933963198890045>")
                .setStyle("SUCCESS")
        )

        return sprintRole
    },

}