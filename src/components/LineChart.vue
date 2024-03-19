<template>
  <DxChart class="h-36" :data-source="dataSource">
    <DxCommonSeriesSettings argument-field="distances" />
    <DxSeries
      v-for="distance in coveredDistanceSource"
      :key="distance.value"
      :value-field="distance.value"
      color="rgb(254 242 242)" />
    <DxArgumentAxis
      :value-margins-enabled="false"
      discrete-axis-division-mode="crossLabels">
      <DxTick :visible="false" />
      <DxMinorTick :visible="false" />
      <DxLabel :visible="false" />
    </DxArgumentAxis>
    <DxValueAxis :visible="false">
      <DxTick :visible="false" />
      <DxMinorTick :visible="false" />
      <DxLabel :visible="false" />
    </DxValueAxis>
    <DxCommonAxisSettings :visible="false"> </DxCommonAxisSettings>
    <DxLegend :visible="false" />
    <DxTooltip :enabled="true" />
  </DxChart>
</template>

<script>
import {
  DxChart,
  DxSeries,
  DxArgumentAxis,
  DxTick,
  DxMinorTick,
  DxLabel,
  DxValueAxis,
  DxCommonAxisSettings,
  DxCommonSeriesSettings,
  DxLegend,
  DxTooltip,
} from "devextreme-vue/chart";

export default {
  props: ["dataSource", "coveredDistanceSource"],
  components: {
    DxChart,
    DxSeries,
    DxArgumentAxis,
    DxTick,
    DxMinorTick,
    DxLabel,
    DxValueAxis,
    DxCommonAxisSettings,
    DxCommonSeriesSettings,
    DxLegend,
    DxTooltip,
  },
};
</script>
