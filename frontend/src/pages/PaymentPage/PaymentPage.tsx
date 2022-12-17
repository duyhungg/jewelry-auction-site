import React from "react";
import { Layout } from "@comp/Layout/Layout";
import { LineCanvas } from "@comp/Canvas/LineCanvas";
import { PaymentManager } from "@comp/PaymentManager/PaymentManager";

export default function CartPage() {
  return (
    <>
      <Layout>
        <PaymentManager />
      </Layout>
      <LineCanvas />
    </>
  );
}
