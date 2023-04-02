const language = require('./Functions/Language');

// To integrate a string in a sentence, you have to put %s to declare a new integration.
// To return a line you just need to add \n
// For a appostrophe you just need to add \'

// All Modules \\
language.registerModule("base")
language.registerModule("verification")
language.registerModule("steamlogin")
language.registerModule("applyform")

// All Languages \\
language.registerSentence("base", "an_error_occured", `Euh, cela est un peu gênant. Une erreur est survenue !`)
language.registerSentence("base", "user", `Utilisateur: `)
language.registerSentence("base", "steamid", `SteamID: `)

// Verification \\
language.registerSentence("verification", "modal_title", `Menu d\'indentification`)
language.registerSentence("verification", "modal_label", `Votre nom RP`)
language.registerSentence("verification", "modal_placeholder", `Notez votre nom RP`)
language.registerSentence("verification", "string_can_only_contain_letter", `Votre nom peut uniquement contenir des lettres!`)
language.registerSentence("verification", "auth_embed_title", `Authentification Steam`)
language.registerSentence("verification", "auth_embed_desc", `Pour vous connecter avec steam, vous devez vous identifier avec le bouton **ci-dessous**. \n\n **Nous recevons et sauvegardons uniquement les informations publiques de votre compte ( SteamID, Nom d'Utilisateur ).**`)
language.registerSentence("verification", "auth_button_title", `M\'identifier!`)
language.registerSentence("verification", "rpname_success_message", `Votre nom a maintenant été modifié ! Veuillez poursuivre l'authentification via Steam`)
language.registerSentence("verification", "log_success_message", `%s à passer la vérification!`)
language.registerSentence("verification", "already_logged", `Vous avez été redirigé vers la vérification car vous étiez déjà connecté !`)
language.registerSentence("verification", "log_already_logged", `%s à passer la vérification! (Already Logged)`)
language.registerSentence("verification", "enter_family_date", `Jamais`)
language.registerSentence("verification", "verify_channel_name", `verify`)

// Web : Steam \\
language.registerSentence("steamlogin", "page_title", `Segits | Famille MalonesKy`)
language.registerSentence("steamlogin", "account_linked", `Votre compte est maintenant lié.`)
language.registerSentence("steamlogin", "can_return_discord", `Vous pouvez retournez sur notre discord!`)
language.registerSentence("steamlogin", "404_title", `Une erreur est survenue! /:`)
language.registerSentence("steamlogin", "404_desc", `La page demandé n'est pas accessible.`)

// Recruiting \\
language.registerSentence("applyform", "already_open_application", `Vous avez déjà une candidature ouverte !`)
language.registerSentence("applyform", "please_wait", `Vous avez déjà fait une candidature récemment. Merci de patienter jusqu'au ** %s ** avant de retenter votre chance !`)
language.registerSentence("applyform", "modal_title", `Candidature MalonesKy`)
language.registerSentence("applyform", "modal_hour_title", `Temps de jeu sur KBRP`)
language.registerSentence("applyform", "modal_hour_desc", `Notez votre temp de jeu. Format: 20 Jour(s) 6 Heure(s) ...`)
language.registerSentence("applyform", "modal_violation_title", `Sanction(s)`)
language.registerSentence("applyform", "modal_violation_desc", `Notez vos sanctions administratives. \nFormat: Description, Gravité, Date`)
language.registerSentence("applyform", "modal_motivation_title", `Motivations`)
language.registerSentence("applyform", "modal_motivation_desc", `Notez vos motivations.`)
language.registerSentence("applyform", "modal_history_title", `Histoire RP`)
language.registerSentence("applyform", "modal_history_desc", `Notez ici votre Histoire RP, le mot de candidature staff est requis.`)
language.registerSentence("applyform", "modal_irl_title", `Information IRL`)
language.registerSentence("applyform", "modal_irl_desc", `Notez votre prénom et votre âge.`)
language.registerSentence("applyform", "refuse_modal_title", `Refus Candidature`)
language.registerSentence("applyform", "refuse_modal_label", `Raison du refus?`)
language.registerSentence("applyform", "auto_refuse_word", `Votre candidature a été refusée car vous n'avez pas lu le règlement I-G. Si vous pensez que cela est une erreur, nous vous invitons à contacter un gestionnaire.`)
language.registerSentence("applyform", "embed_title", `Candidature de %s`)
language.registerSentence("applyform", "embed_desc", `Les membres posteront leur avis sur votre candidature.`)
language.registerSentence("applyform", "embed_hour_title", `Nombre d'heure(s) sur le serveur: `)
language.registerSentence("applyform", "embed_violation_title", `Sanction(s) sur le serveur: `)
