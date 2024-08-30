import type { NitroApp } from "nitropack";
import mongoose from "mongoose";
import { useRuntimeConfig } from "#imports";

type NitroAppPlugin = (nitro: NitroApp) => void;

function defineNitroPlugin(def: NitroAppPlugin): NitroAppPlugin {
  return def;
}

export default defineNitroPlugin(async () => {
  const config = useRuntimeConfig();

  if (!config.nuxtServerUtils?.mongodbURL) {
    console.warn(
      "MongoDB URL not found in runtime config, skipping MongoDB connection"
    );
    return;
  }

  try {
    await mongoose.connect(config.nuxtServerUtils.mongodbURL);
    console.info("MongoDB connected");
  } catch (e) {
    console.error("MongoDB connection error: ", e);
  }
});
