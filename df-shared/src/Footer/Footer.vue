<template>
  <footer class="fr-footer" role="contentinfo" id="footer" tabindex="-1">
    <div class="fr-container">
      <div class="fr-footer__body">
        <div class="fr-footer__brand">
          <p class="fr-logo">
            république
            <br />française
          </p>
          <a class="fr-footer__brand-link" href="https://beta.gouv.fr/">
            <img
              svg-inline
              src="./logo-betagouvfr.svg"
              class="logo-beta"
              aria-label="Accueil - beta.gouv.fr"
            />
          </a>
        </div>
        <div class="fr-footer__content">
          <p class="fr-footer__content-desc">
            DossierFacile est propulsé par la
            <a
              href="https://www.ecologie.gouv.fr/direction-generale-lamenagement-du-logement-et-nature-dgaln"
              title="direction générale de l'aménagement, du logement et de la nature - Nouvelle fenêtre"
              target="_blank"
              rel="noreferrer noopener"
              >direction générale de l'aménagement, du logement et de la
              nature</a
            >. <br />Le code source est disponible en licence libre
          </p>
          <ul class="fr-footer__content-list">
            <li class="fr-footer__content-item">
              <a
                class="fr-footer__content-link"
                href="https://legifrance.gouv.fr"
                >legifrance.gouv.fr</a
              >
            </li>
            <li class="fr-footer__content-item">
              <a class="fr-footer__content-link" href="https://gouvernement.fr"
                >gouvernement.fr</a
              >
            </li>
            <li class="fr-footer__content-item">
              <a
                class="fr-footer__content-link"
                href="https://service-public.fr"
                >service-public.fr</a
              >
            </li>
            <li class="fr-footer__content-item">
              <a class="fr-footer__content-link" href="https://data.gouv.fr"
                >data.gouv.fr</a
              >
            </li>
          </ul>
        </div>
      </div>
      <div class="fr-footer__bottom">
        <ul class="fr-footer__bottom-list">
          <li class="fr-footer__bottom-item">
            <a
              class="fr-footer__bottom-link"
              target="_blank"
              rel="noreferrer"
              title="Les startups d'Etat - Ouvre une nouvelle fenêtre"
              href="https://beta.gouv.fr/"
            >
              Les startups d'Etat
            </a>
          </li>
          <li class="fr-footer__bottom-item">
            <a
              class="fr-footer__bottom-link"
              :title="$t('sitemap')"
              :href="`${VUE_APP_MAIN_URL}/plan-du-site`"
            >
              {{ $t("sitemap") }}
            </a>
          </li>
          <li class="fr-footer__bottom-item">
            <a
              class="fr-footer__bottom-link"
              :href="`${VUE_APP_MAIN_URL}/accessibilite`"
              :title="$t('accessibility-link')"
              >{{ $t("accessibility") }}</a
            >
          </li>
          <li class="fr-footer__bottom-item">
            <a
              class="fr-footer__bottom-link"
              :title="$t('legals')"
              :href="`${VUE_APP_MAIN_URL}/mentions-legales`"
            >
              {{ $t("legals") }}
            </a>
          </li>
          <li class="fr-footer__bottom-item">
            <a
              class="fr-footer__bottom-link"
              :title="$t('statistics')"
              :href="`${VUE_APP_MAIN_URL}/stats`"
            >
              {{ $t("statistics") }}
            </a>
          </li>
          <li class="fr-footer__bottom-item">
            <a
              class="fr-footer__bottom-link"
              :href="`${VUE_APP_DOCS_URL}`"
              target="_blank"
              rel="noreferrer"
              :title="$t('faq-link-title')"
            >
              {{ $t("faq") }}
            </a>
          </li>
          <li class="fr-footer__bottom-item">
            <a
              class="fr-footer__bottom-link"
              href="https://partenaire.dossierfacile.fr"
              target="_blank"
              rel="noreferrer"
              :title="$t('partner-link-title')"
            >
              {{ $t("partner") }}
            </a>
          </li>
          <li class="fr-footer__bottom-item">
            <a
              class="fr-footer__bottom-link"
              target="_blank"
              rel="noreferrer"
              :title="$t('sources-title')"
              href="https://github.com/MTES-MCT/Dossier-Facile-Frontend"
            >
              {{ $t("sources") }}
            </a>
          </li>
        </ul>
        <div class="fr-footer__bottom-copy">
          <p>
            Sauf mention contraire, tous les contenus de ce site sont sous
            <a
              href="https://github.com/etalab/licence-ouverte/blob/master/LO.md"
              target="_blank"
              >licence etalab-2.0</a
            >
          </p>
        </div>
      </div>
    </div>
    <div class="fr-follow">
      <div class="fr-container">
        <div class="fr-grid-row">
          <div class="fr-col-12">
            <div class="fr-follow__social">
              <h2 class="fr-h5">Suivez-nous sur les réseaux sociaux</h2>
              <ul class="fr-btns-group">
                <li>
                  <a
                    class="fr-btn--twitter fr-btn"
                    title="Suivre Dossier facile sur twitter - Ouvre une nouvelle fenêtre"
                    href="https://twitter.com/dossierfacile/"
                    target="_blank"
                  >
                    Suivre Dossier facile sur twitter
                  </a>
                </li>
                <li>
                  <a
                    class="fr-btn--facebook fr-btn"
                    title="Suivre Dossier facile sur facebook - Ouvre une nouvelle fenêtre"
                    href="https://www.facebook.com/DossierFacile.fr/"
                    target="_blank"
                  >
                    Suivre Dossier facile sur facebook
                  </a>
                </li>
                <li>
                  <a
                    class="fr-btn--linkedin fr-btn"
                    lang="en"
                    title="Suivre Dossier facile sur linkedin - Ouvre une nouvelle fenêtre"
                    href="https://www.linkedin.com/company/startup-d-etat-locatio/"
                    target="_blank"
                  >
                    Suivre Dossier facile sur linkedin
                  </a>
                </li>
                <li>
                  <a
                    class="fr-btn--instagram fr-btn"
                    title="Suivre Dossier facile sur instagram - Ouvre une nouvelle fenêtre"
                    href="https://www.instagram.com/dossierfacile/"
                    target="_blank"
                  >
                    Suivre Dossier facile sur instagram
                  </a>
                </li>
                <li>
                  <a
                    class="fr-btn--tiktok fr-btn"
                    title="Suivre Dossier facile sur tiktok - Ouvre une nouvelle fenêtre"
                    href="https://www.tiktok.com/@dossierfacile/"
                    target="_blank"
                  >
                    Suivre Dossier facile sur tiktok
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class TheFooter extends Vue {
  VUE_APP_MAIN_URL = `//${process.env.VUE_APP_MAIN_URL}`;
  VUE_APP_DOCS_URL = `//${process.env.VUE_APP_DOCS_URL}`;
}
</script>

<style lang="scss" scoped>
ul.fr-follow {
  background-color: transparent;
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  list-style: none;
  margin: 0;
  padding: 0;
  height: auto;
  width: auto;
  .fr-btn {
    background-color: white;
    color: grey;
    max-width: 1.5rem;
    vertical-align: middle;
    &:before {
      visibility: visible;
    }
  }
  li {
    padding: 0 0.25rem 0 0.25rem;
  }
  .fr-btn {
    --icon-size: 1rem;
    padding-left: 0.15rem;
  }
}
.fr-footer__brand-link {
  background-image: none;
}
.fr-follow a.fr-btn--tiktok:before {
  content: "";
  mask-image: url(../../../node_modules/@gouvfr/dsfr/dist/icons/logo/fr--tiktok-fill.svg);
  --icon-size: 1.5rem;
  background-color: currentColor;
  display: inline-block;
  flex: 0 0 auto;
  height: var(--icon-size);
  mask-size: 100% 100%;
  vertical-align: middle;
  width: var(--icon-size);
}
.logo-beta {
  height: 103px;
  width: 300px;
}
</style>

<i18n>
{
  "en": {
    "legals": "Legal notice",
    "faq": "Help",
    "sitemap": "Sitemap",
    "sources": "Source code",
    "sources-title": "Source code - Open a new window",
    "accessibility": "Accessibility: partially compliant",
    "statistics": "Statistics",
    "partner": "Become partners",
    "faq-link-title": "Help - Open a new window",
    "partner-link-title": "Partners - Open a new window",
    "accessibility-link": "Accessibility - Open a new window"
  },
  "fr": {
    "legals": "Mentions légales",
    "faq": "Aide",
    "sitemap": "Plan du site",
    "information": "En savoir plus",
    "sources": "Code source",
    "sources-title": "Code source - Ouvre une nouvelle fenêtre",
    "accessibility": "Accessibilité : partiellement conforme",
    "statistics": "Statistiques",
    "partner": "Devenir partenaire",
    "faq-link-title": "Aide - Ouvre une nouvelle fenêtre",
    "partner-link-title": "Devenir partenaire - Ouvre une nouvelle fenêtre",
    "accessibility-link": "Accessibilité : partiellement conforme - Ouvre une nouvelle fenêtre"
  }
}
</i18n>
