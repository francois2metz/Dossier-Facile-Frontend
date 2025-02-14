<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';
import DfButton from 'df-shared-next/src/Button/Button.vue';
import LanguageSelector from 'df-shared-next/src/Header/LanguageSelector.vue';
import useOwnerStore from '../store/owner-store.ts';

const store = useOwnerStore();
const isLoggedIn = computed(() => store.isLoggedIn);
const route = useRoute();
const { t } = useI18n();

const MAIN_URL = `//${import.meta.env.VITE_MAIN_URL}`;
const DOCS_URL = `//${import.meta.env.VITE_DOCS_URL}`;

function currentPage() {
  return route.name;
}

function changeLang(lang: string) {
  store.setLang(lang);
}

function showDeleteAccountModal() {
  store.setShowDeleteAccountModal(true);
}
</script>

<template>
  <ul class="fr-nav__list">
    <li class="fr-nav__item">
      <a :href="`${MAIN_URL}/information`" class="fr-nav__link">
        {{ t('menu.information') }}
      </a>
    </li>
    <li class="fr-nav__item">
      <a :href="`${MAIN_URL}/blog`" class="fr-nav__link">
        {{ t('menu.blog') }}
      </a>
    </li>
    <li class="fr-nav__item">
      <a
        :href="`${DOCS_URL}`"
        class="fr-nav__link fr-external-link"
        target="_blank"
        rel="noreferrer"
      >
        {{ t('menu.help') }}
      </a>
    </li>
    <li class="fr-nav__item break" v-show="isLoggedIn">
      <button
        class="fr-nav__btn"
        aria-expanded="false"
        aria-controls="menu-774"
        v-bind:aria-current="
          currentPage() === 'AccountName' || currentPage() === 'Dashboard' ? true : undefined
        "
      >
        {{ t('menu.account') }}
      </button>
      <div class="fr-collapse fr-menu" id="menu-774">
        <ul class="fr-menu__list">
          <li>
            <a
              class="fr-nav__link"
              href="/proprietaire"
              target="_self"
              v-bind:aria-current="currentPage() === 'AccountName' ? 'page' : undefined"
              >{{ t('menu.personal-data') }}</a
            >
          </li>
          <li>
            <a
              class="fr-nav__link"
              href="/"
              target="_self"
              v-bind:aria-current="currentPage() === 'Dashboard' ? 'page' : undefined"
              >{{ t('menu.dashboard') }}</a
            >
          </li>
          <li>
            <DfButton class="fr-nav__link" @on-click="showDeleteAccountModal">
              {{ t('menu.deleteAccount') }}
            </DfButton>
          </li>
        </ul>
      </div>
    </li>
    <li class="fr-nav__item" :class="{ break: !isLoggedIn }">
      <a
        href="/contact"
        v-bind:aria-current="currentPage() === 'Contact' ? 'page' : undefined"
        class="fr-nav__link"
      >
        <span class="fr-icon-mail-line fr-icon--sm" aria-hidden="true"></span>
        {{ t('menu.contact-us') }}
      </a>
    </li>
    <li class="fr-nav__item fr-translate">
      <LanguageSelector @on-change="changeLang" />
    </li>
  </ul>
</template>

<style scoped lang="scss">
@import '@gouvfr/dsfr/dist/utility/icons/icons-business/icons-business.css';

.fr-nav__item {
  position: relative;

  a.fr-external-link::after {
    content: '';
  }
}

.lang {
  box-shadow: none;
}

.fr-nav__list > li.break {
  @media all and (min-width: 992px) {
    margin-left: auto;
  }
}
</style>
