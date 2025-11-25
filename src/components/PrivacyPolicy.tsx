import React from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const PrivacyPolicy: React.FC = () => {
    const navigate = useNavigate()

    return (
        <div className="min-h-screen bg-gradient-to-br from-light via-light to-primary/10 py-12 px-4">
            <div className="container mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Back button */}
                    <button
                        onClick={() => navigate(-1)}
                        className="flex items-center gap-2 text-dark hover:text-primary transition-colors mb-8"
                    >
                        <ArrowLeft className="w-5 h-5" strokeWidth={1.5} />
                        <span>Retour</span>
                    </button>

                    {/* Content */}
                    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-dark mb-8">
                            Politique de <span className="text-primary">Confidentialité</span>
                        </h1>

                        <div className="space-y-8 text-dark/80 leading-relaxed">
                            <section>
                                <h2 className="text-2xl font-bold text-dark mb-4">Préambule</h2>
                                <p className="mb-4">
                                    Le Règlement (EU) 2016/679 du Parlement Européen et du Conseil du 27 avril 2016 relatif à la protection des personnes physiques à l'égard du traitement de données à caractère personnel et à la libre circulation de ces données (« RGPD ») fixe le cadre juridique applicable aux traitements de données à caractère personnel.
                                </p>
                                <p className="mb-4">
                                    Le traitement des données à caractère personnel résultant de la consultation, la navigation et l'utilisation du site internet https://long-avocat.com (ci-après désigné le « Site ») et des services qu'il propose sont régis par la présente politique de confidentialité.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-dark mb-4">Identité du responsable de traitement</h2>
                                <p className="mb-4">
                                    ML Avocat agit en qualité de responsable de traitement au regard du traitement de leurs données à caractère personnel.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-dark mb-4">Portée</h2>
                                <p className="mb-4">
                                    La présente politique a vocation à s'appliquer dans le cadre de la mise en place de l'ensemble des traitements de données à caractère personnel relatives aux prospects, clients et partenaires. ML Avocat met tout en œuvre pour que les données soient traitées dans le cadre d'une gouvernance interne précise.
                                </p>
                                <p className="mb-4">
                                    Cette politique est indépendante de tout autre document pouvant s'appliquer au sein de la relation contractuelle entre ML Avocat et les clients et/ou prospects et/ou partenaires.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-dark mb-4">Identification des traitements</h2>
                                <h3 className="text-xl font-semibold text-dark mb-3 mt-6">Types de données collectées et finalités</h3>
                                <p className="mb-4">
                                    Les données à caractère personnel traitées par ML Avocat sont essentiellement collectées auprès de ses clients et/ou prospects et/ou partenaires lors de l'usage du Site, mais également lors de l'exécution des contrats qui nous lient.
                                </p>
                                <p className="mb-4">
                                    ML Avocat s'engage à respecter le principe de minimisation des données qui consiste à ne collecter que les données strictement nécessaires à la finalité des traitements. En conséquence, nous ne collectons et n'utilisons que les données à caractère personnel suivantes :
                                </p>

                                <div className="overflow-x-auto mb-6">
                                    <table className="min-w-full border-collapse border border-dark/20">
                                        <thead>
                                            <tr className="bg-primary/10">
                                                <th className="border border-dark/20 px-4 py-3 text-left font-bold text-dark">Type de données</th>
                                                <th className="border border-dark/20 px-4 py-3 text-left font-bold text-dark">Personnes concernées</th>
                                                <th className="border border-dark/20 px-4 py-3 text-left font-bold text-dark">Finalités</th>
                                                <th className="border border-dark/20 px-4 py-3 text-left font-bold text-dark">Base légale</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="border border-dark/20 px-4 py-3">
                                                    Identité et coordonnées : nom de famille, prénom, adresse de courrier électronique, numéro de téléphone<br />
                                                    Informations professionnelles : fonction exercée, société d'appartenance
                                                </td>
                                                <td className="border border-dark/20 px-4 py-3">Prospects / Clients / Partenaires</td>
                                                <td className="border border-dark/20 px-4 py-3">
                                                    Gestion de la relation professionnelle<br />
                                                    Traitement des demandes de contact<br />
                                                    Communication (newsletter, organisation d'évènement)<br />
                                                    Respect des obligations légales
                                                </td>
                                                <td className="border border-dark/20 px-4 py-3">
                                                    Exécution du contrat ou mesures précontractuelles<br />
                                                    Intérêt légitime<br />
                                                    Consentement<br />
                                                    Respect des obligations légales
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="border border-dark/20 px-4 py-3">
                                                    Données techniques de connexion : adresse IP, journaux de connexion, informations sur le navigateur utilisé
                                                </td>
                                                <td className="border border-dark/20 px-4 py-3">Prospects / Clients / Partenaires</td>
                                                <td className="border border-dark/20 px-4 py-3">
                                                    Gestion de la relation professionnelle<br />
                                                    Traitement des demandes de contact
                                                </td>
                                                <td className="border border-dark/20 px-4 py-3">Intérêt légitime</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </section>

                            <section>
                                <h3 className="text-xl font-semibold text-dark mb-3 mt-6">Destinataires des données – habilitation et traçabilité</h3>
                                <p className="mb-4">
                                    ML Avocat s'assure que les données ne soient accessibles qu'à des destinataires internes ou externes habilités (Ordre, prestataire de paiement, gestion du site).
                                </p>
                                <p className="mb-4">
                                    Les destinataires des données à caractère personnel des clients, prospects et partenaires sont soumis à une obligation de confidentialité.
                                </p>
                                <p className="mb-4">
                                    Par ailleurs, les données à caractère personnel pourront être communiquées à toute autorité légalement habilitée à en connaître. Dans ce cas, ML Avocat n'est pas responsable des conditions dans lesquelles les personnels de ces autorités ont accès et exploitent les données.
                                </p>
                            </section>

                            <section>
                                <h3 className="text-xl font-semibold text-dark mb-3 mt-6">Durée de conservation</h3>
                                <p className="mb-4">
                                    La durée de conservation des données est définie par ML Avocat au regard des contraintes légales et contractuelles qui pèsent sur elle et à défaut en fonction de ses besoins et notamment selon les principes suivants :
                                </p>

                                <div className="overflow-x-auto mb-6">
                                    <table className="min-w-full border-collapse border border-dark/20">
                                        <thead>
                                            <tr className="bg-primary/10">
                                                <th className="border border-dark/20 px-4 py-3 text-left font-bold text-dark">Traitement</th>
                                                <th className="border border-dark/20 px-4 py-3 text-left font-bold text-dark">Durée de conservation</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="border border-dark/20 px-4 py-3">Données relatives aux clients</td>
                                                <td className="border border-dark/20 px-4 py-3">
                                                    Pendant la durée des relations contractuelles avec ML Avocat, augmentée de 5 ans à compter de la cessation de la relation d'affaires pour les données et documents relatifs à l'identité des clients.
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="border border-dark/20 px-4 py-3">Données relatives aux prospects</td>
                                                <td className="border border-dark/20 px-4 py-3">
                                                    3 ans à compter de leur collecte par ML Avocat ou du dernier contact émanant du prospect
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="border border-dark/20 px-4 py-3">Données financières</td>
                                                <td className="border border-dark/20 px-4 py-3">
                                                    10 ans conformément aux obligations légales
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <p className="mb-4">
                                    Passé les délais fixés, les données sont soit supprimées, soit conservées après avoir été anonymisées, notamment pour des raisons d'usages statistiques. Elles peuvent être conservées en cas de précontentieux et contentieux.
                                </p>
                                <p className="mb-4">
                                    Il est rappelé aux clients, prospects et partenaires que la suppression ou l'anonymisation sont des opérations irréversibles et que ML Avocat n'est plus, par la suite, en mesure de les restaurer.
                                </p>
                            </section>

                            <section>
                                <h3 className="text-xl font-semibold text-dark mb-3 mt-6">Gestion du droit des personnes</h3>
                                <p className="mb-4">
                                    Conformément aux articles 15 à 22 du RGPD et à la loi Informatique et Libertés, vous bénéficiez des droits suivants :
                                </p>
                                <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
                                    <li>Droit d'accès et droit de copie de vos données traitées ;</li>
                                    <li>Droit de rectification pour demander la correction en cas de données inexactes ou incomplètes ;</li>
                                    <li>Droit à l'effacement (droit à l'oubli) sauf pour les traitements mis en œuvre pour répondre à une obligation légale.</li>
                                    <li>Droit à la limitation et à la portabilité</li>
                                    <li>Droit d'opposition pour les seuls traitements fondés sur l'intérêt légitime</li>
                                    <li>Droit post mortem pour formuler des directives concernant la conservation, l'effacement et la communication de vos données post-mortem.</li>
                                    <li>Droit de retrait du consentement</li>
                                </ul>
                                <p className="mb-4">
                                    L'exercice des droits précités s'effectue par courrier électronique à l'adresse <a
                                        href="mailto:marianne@long-avocat.com"
                                        className="text-primary hover:underline"
                                    >
                                        marianne@long-avocat.com
                                    </a>.
                                </p>
                                <p className="mb-4">
                                    ML Avocat peut être amené, en cas de doute, à vous demander une copie de votre titre d'identité à jour. À défaut, votre demande pourrait être refusée.
                                </p>
                                <p className="mb-4">
                                    Nous faisons notre possible pour répondre aux demandes dans un délai raisonnable et, au mieux, dans un délai d'un mois à compter de la réception de la demande.
                                </p>
                            </section>

                            <section>
                                <h3 className="text-xl font-semibold text-dark mb-3 mt-6">Mesures de sécurité</h3>
                                <p className="mb-4">
                                    Nous mettons en œuvre les mesures techniques de sécurité physique ou logique que nous estimons appropriées pour lutter contre la destruction, la perte, l'altération ou la divulgation non autorisée des données de manière accidentelle ou illicite. Parmi ces mesures figurent principalement :
                                </p>
                                <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
                                    <li>utilisation du protocole HTTPS pour sécuriser les échanges</li>
                                    <li>hébergement sécurisé des données</li>
                                    <li>accès individuels par identifiant et mot de passe complexe, régulièrement renouvelés</li>
                                    <li>clause de confidentialité</li>
                                    <li>sauvegardes régulières</li>
                                    <li>procédure de notification en cas de violation de données.</li>
                                </ul>
                            </section>

                            <section>
                                <h3 className="text-xl font-semibold text-dark mb-3 mt-6">Droit d'introduire une réclamation auprès de la Cnil</h3>
                                <p className="mb-4">
                                    Les clients, prospects et partenaires concernés par le traitement de leurs données à caractère personnel sont informés de leur droit d'introduire une plainte auprès d'une autorité de contrôle, à savoir la CNIL en France, si celui-ci estime que le traitement de données à caractère personnel le concernant n'est pas conforme à la réglementation européenne de protection des données, à l'adresse suivante :
                                </p>
                                <p className="mb-2">
                                    <strong>CNIL – Service des plaintes</strong>
                                </p>
                                <p className="mb-2">
                                    3 Place de Fontenoy - TSA 80715 - 75334 PARIS CEDEX 07
                                </p>
                                <p className="mb-2">
                                    Tél : 01 53 73 22 22
                                </p>
                                <p className="mb-4">
                                    Site web : <a
                                        href="https://www.cnil.fr"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-primary hover:underline"
                                    >
                                        https://www.cnil.fr
                                    </a>
                                </p>
                            </section>

                            <section>
                                <h3 className="text-xl font-semibold text-dark mb-3 mt-6">Évolution</h3>
                                <p className="mb-4">
                                    La présente politique peut être modifiée ou aménagée à tout moment en cas d'évolution légale, jurisprudentielle, des décisions et recommandations de la Cnil ou des usages.
                                </p>
                                <p className="mb-4">
                                    Toute nouvelle version de la présente politique sera portée à la connaissance des clients et contacts par tout moyen défini par ML Avocat, en ce compris la voie électronique (diffusion par courrier électronique ou en ligne par exemple).
                                </p>
                            </section>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default PrivacyPolicy

