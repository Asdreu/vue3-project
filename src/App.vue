<template>
  <el-config-provider :locale="locale">
    <div class="h-full bg-base">
      <router-view></router-view>
    </div>
  </el-config-provider>
</template>

<script setup lang="ts">
import zhCn from "element-plus/lib/locale/lang/zh-cn";
import en from "element-plus/lib/locale/lang/en";
import { lang } from "@/hooks/useI18n";

const locale = computed(() => {
  return lang.locale.value === "zh-CN" ? zhCn : en;
});
</script>

<style lang="less" scoped></style>
