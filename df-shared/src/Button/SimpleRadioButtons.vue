<template>
  <fieldset class="fr-fieldset" :id="name">
    <div
      v-for="element in elements"
      v-bind:key="element.id"
      class="fr-fieldset__element"
    >
      <div class="fr-radio-group">
        <input
          :id="element.id"
          type="radio"
          :name="name"
          :checked="value === element.optionName"
          @click="onSelect(element.optionName)"
        />
        <label class="fr-label" :for="element.id">
          {{ $tc(element.labelKey) }}
          <span class="fr-hint-text" v-if="element.description">
            {{ $tc(element.description) }}
          </span>
        </label>
      </div>
    </div>
  </fieldset>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

export interface RadioElement {
  id: string;
  labelKey: string;
  description?: string;
  iconClass: string;
  iconCount?: number;
  optionName: string;
}

@Component
export default class SimpleRadioButtons extends Vue {
  @Prop() name!: string;
  @Prop() elements!: RadioElement[];
  @Prop() value!: string;

  onSelect(applicationType: string) {
    this.$emit("input", applicationType);
  }
}
</script>

<style lang="scss">
.icon-container {
  height: 5rem;
  width: 6rem;
  color: var(--primary);
  background-color: var(--white);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
