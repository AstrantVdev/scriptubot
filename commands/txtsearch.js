const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
	.setName('txtsearch')
    .setDescription('Chercher un texte dans un channel')
    .addStringOption(option => option
        .setName('dt')
		.setDescription("Déterminant du texte à rechercher")
        .setRequired(true)),

	async execute(interaction) {
        let dt = interaction.options.getString('dt');
        let channel = interaction.channel;

        let fetched = await channel.messages.fetch({limit: n});
        channel.bulkDe;

        await interaction.reply({ content: 'Action accomplie avec succès ! :D', ephemeral: true });
	},

};