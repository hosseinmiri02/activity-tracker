<template>
  <DxChart class="h-36 mt-4" :data-source="dataSource">
    <DxSeries
      argument-field="day"
      value-field="time"
      :bar-padding="0.6"
      type="bar"
      color="rgb(254 242 242)" />
    <DxArgumentAxis
      :value-margins-enabled="false"
      discrete-axis-division-mode="crossLabels">
      <DxTick :visible="false" />
      <DxMinorTick :visible="false" />
    </DxArgumentAxis>
    <DxValueAxis :visible="false">
      <DxTick :visible="false" />
      <DxMinorTick :visible="false" />
      <DxLabel :visible="false" />
    </DxValueAxis>
    <DxLegend :visible="false" />
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
  DxLegend,
} from "devextreme-vue/chart";

export default {
  props: ["dataSource"],
  components: {
    DxChart,
    DxSeries,
    DxArgumentAxis,
    DxTick,
    DxMinorTick,
    DxLabel,
    DxValueAxis,
    DxLegend,
  },
};
</script>
