import { NavConfigProps } from "./types";

export const navVerticalConfig = (config?: NavConfigProps) => ({
  itemGap: config?.itemGap || 4,
  iconSize: config?.iconSize || 24,
  currentRole: config?.currentRole,
  itemRootHeight: config?.itemRootHeight || 44,
  itemSubHeight: config?.itemSubHeight || 36,
  itemPadding: config?.itemPadding || "4px 8px 4px 12px",
  itemRadius: config?.itemRadius || 8,
  hiddenLabel: config?.hiddenLabel || false,
});
