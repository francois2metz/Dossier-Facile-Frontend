<template>
  <li
    class="fr-grid-row file-list-item fr-p-3w"
    :class="{ 'not-validated': documentStatus() != 'VALIDATED' }"
  >
    <div class="fr-col-12 fr-col-md-5">
      {{ label }}
      <br />
      <span v-if="subLabel" class="fr-text--xs fr-label--disabled">
        {{ subLabel }}
      </span>
    </div>
    <div class="fr-col-5 fr-col-md-3 tag-container">
      <div style="align-self: center">
        <ColoredTag
          :text="getTagLabel()"
          :status="documentStatus()"
        ></ColoredTag>
      </div>
      <div>
        <slot name="postTag"></slot>
      </div>
    </div>
    <div class="fr-col-7 fr-col-md-4 fr-btns-group--right">
      <DfButton
        v-if="
          enableDownload &&
          document &&
          document.name &&
          (!showValidated || document.documentStatus === 'VALIDATED')
        "
        class="fr-btn--icon-left fr-fi-eye-line fr-mr-1w"
        @on-click="openDocument()"
      >
        <span class="fr-hidden fr-unhidden-md">
          {{ $t("filerowlistitem.see") }}
        </span>
      </DfButton>

      <DfButton
        v-if="hasClickEditionListener()"
        class="fr-btn--icon-left fr-icon-pencil-line"
        @on-click="clickEdit()"
        ><span class="fr-hidden fr-unhidden-lg">{{
          $t("filerowlistitem.edit")
        }}</span>
      </DfButton>
    </div>
  </li>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import DfButton from "df-shared/src/Button/Button.vue";
import { DfDocument } from "df-shared/src/models/DfDocument";
import ColoredTag from "df-shared/src/components/ColoredTag.vue";

@Component({
  components: {
    DfButton,
    ColoredTag,
  },
})
export default class FileRowListItem extends Vue {
  @Prop() label!: string;
  @Prop() subLabel!: string;
  @Prop() document!: DfDocument;
  @Prop({ default: true }) enableDownload?: boolean;
  @Prop() tagLabel?: string;
  @Prop({ default: false }) showValidated?: boolean;

  hasClickEditionListener() {
    return this.$listeners && this.$listeners["click-edit"];
  }

  clickEdit() {
    this.$emit("click-edit");
  }

  getTagLabel() {
    if (this.tagLabel) {
      return this.tagLabel;
    }
    return this.$i18n.t("documents.status." + this.documentStatus()).toString();
  }

  documentStatus() {
    if (this.document) {
      return this.document?.documentStatus
        ? this.document?.documentStatus
        : "EMPTY";
    }
    return "EMPTY";
  }

  openDocument() {
    window.open(this.document.name, "_blank");
  }

  listItemIconClass() {
    switch (this.document?.documentStatus) {
      case "TO_PROCESS":
        return "fr-icon-information-fill";
      case "VALIDATED":
        return "fr-icon-checkbox-circle-line";
      case "DECLINED":
        return "fr-icon-alert-fill";
    }
    return "fr-icon-circle-empty";
  }
}
</script>

<style lang="scss">
.fr-icon-checkbox-circle-line:before {
  margin-right: 0.5rem;
  color: green;
}

.fr-icon-information-fill:before {
  margin-right: 0.5rem;
  color: var(--purple-text);
}

.fr-icon-alert-fill:before {
  margin-right: 0.5rem;
  color: var(--danger);
}

.fr-icon-circle-empty:before {
  margin-right: 0.5rem;
  background-color: transparent;
  color: grey;
  border-radius: 50%;
  border-width: 2px;
  border-style: solid;
  height: 20px;
  width: 20px;
  margin: 4px 8px 4px 6px;
}

.file-list-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  border-style: solid;
  border-width: thin;
  border-radius: 0.25rem;
  border-color: var(--grey-900-175);
  min-height: 4rem;

  &.not-validated {
    background-color: var(--background-alt-grey);
    border-style: none;
  }
}

.tag-container {
  display: flex;
  @media all and (max-width: 767px) {
    flex-direction: column;
  }
}
</style>
