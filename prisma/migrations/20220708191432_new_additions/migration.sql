/*
  Warnings:

  - You are about to drop the column `currencyId` on the `basecurrency` table. All the data in the column will be lost.
  - You are about to drop the column `baseCurrencyId` on the `exchangerates` table. All the data in the column will be lost.
  - You are about to drop the column `currencyId` on the `exchangerates` table. All the data in the column will be lost.
  - You are about to drop the column `exchangeRateId` on the `payments` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `supplierId` on the `products` table. All the data in the column will be lost.
  - You are about to alter the column `measurement_amount` on the `products` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to drop the column `email` on the `suppliers` table. All the data in the column will be lost.
  - You are about to drop the column `customerId` on the `transactions` table. All the data in the column will be lost.
  - You are about to drop the column `supplierId` on the `transactions` table. All the data in the column will be lost.
  - You are about to drop the `authentication` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `creditors` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `debtors` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `purchases` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `sales` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[corporate_name]` on the table `suppliers` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email_address]` on the table `suppliers` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `currency_id` to the `baseCurrency` table without a default value. This is not possible if the table is not empty.
  - Added the required column `base_currency_id` to the `exchangeRates` table without a default value. This is not possible if the table is not empty.
  - Added the required column `currency_id` to the `exchangeRates` table without a default value. This is not possible if the table is not empty.
  - Added the required column `exchange_rate_id` to the `payments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `payment_type_id` to the `payments` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `authentication` DROP FOREIGN KEY `Authentication_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `basecurrency` DROP FOREIGN KEY `baseCurrency_currencyId_fkey`;

-- DropForeignKey
ALTER TABLE `creditors` DROP FOREIGN KEY `creditors_cashierId_fkey`;

-- DropForeignKey
ALTER TABLE `creditors` DROP FOREIGN KEY `creditors_customer_id_fkey`;

-- DropForeignKey
ALTER TABLE `creditors` DROP FOREIGN KEY `creditors_supplier_id_fkey`;

-- DropForeignKey
ALTER TABLE `creditors` DROP FOREIGN KEY `creditors_transactionId_fkey`;

-- DropForeignKey
ALTER TABLE `debtors` DROP FOREIGN KEY `debtors_cashierId_fkey`;

-- DropForeignKey
ALTER TABLE `debtors` DROP FOREIGN KEY `debtors_customer_id_fkey`;

-- DropForeignKey
ALTER TABLE `debtors` DROP FOREIGN KEY `debtors_supplier_id_fkey`;

-- DropForeignKey
ALTER TABLE `debtors` DROP FOREIGN KEY `debtors_transactionId_fkey`;

-- DropForeignKey
ALTER TABLE `exchangerates` DROP FOREIGN KEY `exchangeRates_baseCurrencyId_fkey`;

-- DropForeignKey
ALTER TABLE `exchangerates` DROP FOREIGN KEY `exchangeRates_currencyId_fkey`;

-- DropForeignKey
ALTER TABLE `payments` DROP FOREIGN KEY `payments_exchangeRateId_fkey`;

-- DropForeignKey
ALTER TABLE `payments` DROP FOREIGN KEY `payments_transaction_id_fkey`;

-- DropForeignKey
ALTER TABLE `products` DROP FOREIGN KEY `products_supplierId_fkey`;

-- DropForeignKey
ALTER TABLE `purchases` DROP FOREIGN KEY `purchases_product_id_fkey`;

-- DropForeignKey
ALTER TABLE `purchases` DROP FOREIGN KEY `purchases_recepientId_fkey`;

-- DropForeignKey
ALTER TABLE `purchases` DROP FOREIGN KEY `purchases_supplier_id_fkey`;

-- DropForeignKey
ALTER TABLE `purchases` DROP FOREIGN KEY `purchases_transaction_id_fkey`;

-- DropForeignKey
ALTER TABLE `sales` DROP FOREIGN KEY `sales_cashierId_fkey`;

-- DropForeignKey
ALTER TABLE `sales` DROP FOREIGN KEY `sales_customerId_fkey`;

-- DropForeignKey
ALTER TABLE `sales` DROP FOREIGN KEY `sales_product_id_fkey`;

-- DropForeignKey
ALTER TABLE `sales` DROP FOREIGN KEY `sales_transaction_id_fkey`;

-- DropForeignKey
ALTER TABLE `transactions` DROP FOREIGN KEY `transactions_customerId_fkey`;

-- DropForeignKey
ALTER TABLE `transactions` DROP FOREIGN KEY `transactions_supplierId_fkey`;

-- DropIndex
DROP INDEX `suppliers_email_key` ON `suppliers`;

-- AlterTable
ALTER TABLE `basecurrency` DROP COLUMN `currencyId`,
    ADD COLUMN `active` BOOLEAN NOT NULL DEFAULT true,
    ADD COLUMN `currency_id` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `currency` ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `exchangerates` DROP COLUMN `baseCurrencyId`,
    DROP COLUMN `currencyId`,
    ADD COLUMN `active` BOOLEAN NOT NULL DEFAULT true,
    ADD COLUMN `base_currency_id` VARCHAR(191) NOT NULL,
    ADD COLUMN `currency_id` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `payments` DROP COLUMN `exchangeRateId`,
    ADD COLUMN `exchange_rate_id` VARCHAR(191) NOT NULL,
    ADD COLUMN `payment_type_id` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `products` DROP COLUMN `price`,
    DROP COLUMN `supplierId`,
    ADD COLUMN `depleted` BOOLEAN NOT NULL DEFAULT true,
    ADD COLUMN `disposed` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `product_group_id` VARCHAR(191) NULL,
    ADD COLUMN `supplier_id` VARCHAR(191) NULL,
    MODIFY `measurement_amount` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `suppliers` DROP COLUMN `email`,
    ADD COLUMN `email_address` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `transactions` DROP COLUMN `customerId`,
    DROP COLUMN `supplierId`,
    ADD COLUMN `customer_id` VARCHAR(191) NULL,
    ADD COLUMN `error_description` VARCHAR(191) NULL,
    ADD COLUMN `supplier_id` VARCHAR(191) NULL,
    MODIFY `total_amount` DECIMAL(12, 2) NULL,
    MODIFY `total_payable` DECIMAL(12, 2) NULL;

-- AlterTable
ALTER TABLE `users` ADD COLUMN `email_address` VARCHAR(191) NULL;

-- DropTable
DROP TABLE `authentication`;

-- DropTable
DROP TABLE `creditors`;

-- DropTable
DROP TABLE `debtors`;

-- DropTable
DROP TABLE `purchases`;

-- DropTable
DROP TABLE `sales`;

-- CreateTable
CREATE TABLE `Action` (
    `id` VARCHAR(191) NOT NULL,
    `user_id` INTEGER NOT NULL,
    `action_type` BOOLEAN NOT NULL,
    `description` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PaymentType` (
    `id` VARCHAR(191) NOT NULL,
    `payment_type_name` VARCHAR(191) NOT NULL,
    `charges` DECIMAL(12, 2) NOT NULL,
    `discount` DECIMAL(12, 2) NOT NULL,

    UNIQUE INDEX `PaymentType_payment_type_name_key`(`payment_type_name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Tax` (
    `id` VARCHAR(191) NOT NULL,
    `tax_name` VARCHAR(191) NOT NULL,
    `tax_rate` VARCHAR(191) NOT NULL,
    `start_amount` DECIMAL(12, 2) NOT NULL,
    `end_amount` DECIMAL(12, 2) NOT NULL,
    `active` BOOLEAN NOT NULL DEFAULT true,
    `start_date` DATETIME(3) NOT NULL,
    `end_date` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Promotions` (
    `id` VARCHAR(191) NOT NULL,
    `product_id` VARCHAR(191) NOT NULL,
    `product_group_id` VARCHAR(191) NOT NULL,
    `start_date` DATETIME(3) NOT NULL,
    `end_date` DATETIME(3) NOT NULL,
    `discount_rate` DECIMAL(12, 5) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ProductGroup` (
    `id` VARCHAR(191) NOT NULL,
    `tax_id` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `prices` (
    `id` VARCHAR(191) NOT NULL,
    `barcode` VARCHAR(191) NOT NULL,
    `price` DECIMAL(12, 2) NOT NULL,
    `active` BOOLEAN NOT NULL,
    `exchange_rate_id` VARCHAR(191) NOT NULL,
    `product_id` VARCHAR(191) NULL,

    INDEX `prices_exchangeRateId_fkey`(`exchange_rate_id`),
    INDEX `prices_productId_fkey`(`product_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `invoices` (
    `id` VARCHAR(191) NOT NULL,
    `product_id` VARCHAR(191) NOT NULL,
    `discount` DECIMAL(12, 2) NOT NULL DEFAULT 0.00,
    `price` DECIMAL(12, 2) NOT NULL,
    `quantity` INTEGER NOT NULL,
    `transaction_id` INTEGER NOT NULL,
    `cashierId` INTEGER NOT NULL,
    `customerId` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `supplier_id` VARCHAR(191) NULL,

    INDEX `invoice_cashierId_fkey`(`cashierId`),
    INDEX `invoice_customerId_fkey`(`customerId`),
    INDEX `invoice_product_id_fkey`(`product_id`),
    INDEX `invoice_transaction_id_fkey`(`transaction_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Address` (
    `id` VARCHAR(191) NOT NULL,
    `supplierId` VARCHAR(191) NULL,
    `customerId` VARCHAR(191) NULL,
    `street` VARCHAR(191) NOT NULL,
    `city` VARCHAR(191) NOT NULL,
    `country` VARCHAR(191) NOT NULL,
    `zip` VARCHAR(191) NULL,

    INDEX `Address_customerId_fkey`(`customerId`),
    INDEX `Address_supplierId_fkey`(`supplierId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `disposals` (
    `id` VARCHAR(191) NOT NULL,
    `product_id` VARCHAR(191) NOT NULL,
    `price_id` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `Disposals_priceId_fkey`(`price_id`),
    INDEX `Disposals_productId_fkey`(`product_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Journal` (
    `id` VARCHAR(191) NOT NULL,
    `recepient_id` INTEGER NOT NULL,
    `supplier_id` VARCHAR(191) NULL,
    `customer_id` VARCHAR(191) NULL,
    `transaction_id` INTEGER NOT NULL,
    `narration` VARCHAR(191) NOT NULL,
    `amount` DECIMAL(12, 2) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SalesJournal` (
    `id` VARCHAR(191) NOT NULL,
    `recorder_id` INTEGER NOT NULL,
    `supplierId` VARCHAR(191) NOT NULL,
    `transactionId` INTEGER NOT NULL,
    `narration` VARCHAR(191) NOT NULL,
    `amount` DECIMAL(12, 2) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PurchasesJournal` (
    `id` VARCHAR(191) NOT NULL,
    `recorder_id` INTEGER NOT NULL,
    `customer_id` VARCHAR(191) NULL,
    `transaction_id` INTEGER NOT NULL,
    `narration` VARCHAR(191) NOT NULL,
    `amount` DECIMAL(12, 2) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CashDisbursementsJournal` (
    `id` VARCHAR(191) NOT NULL,
    `recorder_id` INTEGER NOT NULL,
    `supplier_id` VARCHAR(191) NULL,
    `customer_id` VARCHAR(191) NULL,
    `transaction_id` INTEGER NOT NULL,
    `narration` VARCHAR(191) NOT NULL,
    `amount` DECIMAL(12, 2) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CashReceiptsJournal` (
    `id` VARCHAR(191) NOT NULL,
    `recorder_id` INTEGER NOT NULL,
    `supplier_id` VARCHAR(191) NULL,
    `customer_id` VARCHAR(191) NULL,
    `transaction_id` INTEGER NOT NULL,
    `narration` VARCHAR(191) NOT NULL,
    `amount` DECIMAL(12, 2) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ReturnsInwardsJournal` (
    `id` VARCHAR(191) NOT NULL,
    `recorder_id` INTEGER NOT NULL,
    `customer_id` VARCHAR(191) NOT NULL,
    `transaction_id` INTEGER NOT NULL,
    `narration` VARCHAR(191) NOT NULL,
    `amount` DECIMAL(12, 2) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ReturnsOutwardsJournal` (
    `id` VARCHAR(191) NOT NULL,
    `recorder_id` INTEGER NOT NULL,
    `supplier_id` VARCHAR(191) NOT NULL,
    `transaction_id` INTEGER NOT NULL,
    `narration` VARCHAR(191) NOT NULL,
    `amount` DECIMAL(12, 2) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_PaymentTypeToTax` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_PaymentTypeToTax_AB_unique`(`A`, `B`),
    INDEX `_PaymentTypeToTax_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_TaxTocurrency` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_TaxTocurrency_AB_unique`(`A`, `B`),
    INDEX `_TaxTocurrency_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_TaxToinvoice` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_TaxToinvoice_AB_unique`(`A`, `B`),
    INDEX `_TaxToinvoice_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_ProductToTax` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_ProductToTax_AB_unique`(`A`, `B`),
    INDEX `_ProductToTax_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE INDEX `baseCurrency_currencyId_fkey` ON `baseCurrency`(`currency_id`);

-- CreateIndex
CREATE INDEX `exchangeRates_baseCurrencyId_fkey` ON `exchangeRates`(`base_currency_id`);

-- CreateIndex
CREATE INDEX `exchangeRates_currencyId_fkey` ON `exchangeRates`(`currency_id`);

-- CreateIndex
CREATE INDEX `payments_currency_id_fkey` ON `payments`(`currency_id`);

-- CreateIndex
CREATE INDEX `payments_exchangeRateId_fkey` ON `payments`(`exchange_rate_id`);

-- CreateIndex
CREATE INDEX `products_supplierId_fkey` ON `products`(`supplier_id`);

-- CreateIndex
CREATE UNIQUE INDEX `suppliers_corporate_name_key` ON `suppliers`(`corporate_name`);

-- CreateIndex
CREATE UNIQUE INDEX `suppliers_email_address_key` ON `suppliers`(`email_address`);

-- CreateIndex
CREATE INDEX `transactions_customerId_fkey` ON `transactions`(`customer_id`);

-- CreateIndex
CREATE INDEX `transactions_supplierId_fkey` ON `transactions`(`supplier_id`);

-- AddForeignKey
ALTER TABLE `Action` ADD CONSTRAINT `Action_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `transactions` ADD CONSTRAINT `transactions_supplier_id_fkey` FOREIGN KEY (`supplier_id`) REFERENCES `suppliers`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `transactions` ADD CONSTRAINT `transactions_customer_id_fkey` FOREIGN KEY (`customer_id`) REFERENCES `customers`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `payments` ADD CONSTRAINT `payments_transaction_id_fkey` FOREIGN KEY (`transaction_id`) REFERENCES `transactions`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `payments` ADD CONSTRAINT `payments_payment_type_id_fkey` FOREIGN KEY (`payment_type_id`) REFERENCES `PaymentType`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `payments` ADD CONSTRAINT `payments_exchange_rate_id_fkey` FOREIGN KEY (`exchange_rate_id`) REFERENCES `exchangeRates`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Promotions` ADD CONSTRAINT `Promotions_product_group_id_fkey` FOREIGN KEY (`product_group_id`) REFERENCES `ProductGroup`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Promotions` ADD CONSTRAINT `Promotions_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `products`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProductGroup` ADD CONSTRAINT `ProductGroup_tax_id_fkey` FOREIGN KEY (`tax_id`) REFERENCES `Tax`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `products` ADD CONSTRAINT `products_product_group_id_fkey` FOREIGN KEY (`product_group_id`) REFERENCES `ProductGroup`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `products` ADD CONSTRAINT `products_supplier_id_fkey` FOREIGN KEY (`supplier_id`) REFERENCES `suppliers`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `prices` ADD CONSTRAINT `prices_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `products`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `prices` ADD CONSTRAINT `prices_exchange_rate_id_fkey` FOREIGN KEY (`exchange_rate_id`) REFERENCES `exchangeRates`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `invoices` ADD CONSTRAINT `invoices_cashierId_fkey` FOREIGN KEY (`cashierId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `invoices` ADD CONSTRAINT `invoices_transaction_id_fkey` FOREIGN KEY (`transaction_id`) REFERENCES `transactions`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `invoices` ADD CONSTRAINT `invoices_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `products`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `invoices` ADD CONSTRAINT `invoices_supplier_id_fkey` FOREIGN KEY (`supplier_id`) REFERENCES `suppliers`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `invoices` ADD CONSTRAINT `invoices_customerId_fkey` FOREIGN KEY (`customerId`) REFERENCES `customers`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Address` ADD CONSTRAINT `Address_supplierId_fkey` FOREIGN KEY (`supplierId`) REFERENCES `suppliers`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Address` ADD CONSTRAINT `Address_customerId_fkey` FOREIGN KEY (`customerId`) REFERENCES `customers`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `baseCurrency` ADD CONSTRAINT `baseCurrency_currencyId_fkey` FOREIGN KEY (`currency_id`) REFERENCES `currency`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `disposals` ADD CONSTRAINT `Disposals_productId_fkey` FOREIGN KEY (`product_id`) REFERENCES `products`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `disposals` ADD CONSTRAINT `Disposals_priceId_fkey` FOREIGN KEY (`price_id`) REFERENCES `prices`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `exchangeRates` ADD CONSTRAINT `exchangeRates_baseCurrencyId_fkey` FOREIGN KEY (`base_currency_id`) REFERENCES `baseCurrency`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `exchangeRates` ADD CONSTRAINT `exchangeRates_currencyId_fkey` FOREIGN KEY (`currency_id`) REFERENCES `currency`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Journal` ADD CONSTRAINT `Journal_recepient_id_fkey` FOREIGN KEY (`recepient_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Journal` ADD CONSTRAINT `Journal_transaction_id_fkey` FOREIGN KEY (`transaction_id`) REFERENCES `transactions`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Journal` ADD CONSTRAINT `Journal_supplier_id_fkey` FOREIGN KEY (`supplier_id`) REFERENCES `suppliers`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Journal` ADD CONSTRAINT `Journal_customer_id_fkey` FOREIGN KEY (`customer_id`) REFERENCES `customers`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SalesJournal` ADD CONSTRAINT `SalesJournal_recorder_id_fkey` FOREIGN KEY (`recorder_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SalesJournal` ADD CONSTRAINT `SalesJournal_transactionId_fkey` FOREIGN KEY (`transactionId`) REFERENCES `transactions`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SalesJournal` ADD CONSTRAINT `SalesJournal_supplierId_fkey` FOREIGN KEY (`supplierId`) REFERENCES `suppliers`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PurchasesJournal` ADD CONSTRAINT `PurchasesJournal_recorder_id_fkey` FOREIGN KEY (`recorder_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PurchasesJournal` ADD CONSTRAINT `PurchasesJournal_transaction_id_fkey` FOREIGN KEY (`transaction_id`) REFERENCES `transactions`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PurchasesJournal` ADD CONSTRAINT `PurchasesJournal_customer_id_fkey` FOREIGN KEY (`customer_id`) REFERENCES `customers`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CashDisbursementsJournal` ADD CONSTRAINT `CashDisbursementsJournal_recorder_id_fkey` FOREIGN KEY (`recorder_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CashDisbursementsJournal` ADD CONSTRAINT `CashDisbursementsJournal_transaction_id_fkey` FOREIGN KEY (`transaction_id`) REFERENCES `transactions`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CashDisbursementsJournal` ADD CONSTRAINT `CashDisbursementsJournal_supplier_id_fkey` FOREIGN KEY (`supplier_id`) REFERENCES `suppliers`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CashDisbursementsJournal` ADD CONSTRAINT `CashDisbursementsJournal_customer_id_fkey` FOREIGN KEY (`customer_id`) REFERENCES `customers`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CashReceiptsJournal` ADD CONSTRAINT `CashReceiptsJournal_recorder_id_fkey` FOREIGN KEY (`recorder_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CashReceiptsJournal` ADD CONSTRAINT `CashReceiptsJournal_transaction_id_fkey` FOREIGN KEY (`transaction_id`) REFERENCES `transactions`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CashReceiptsJournal` ADD CONSTRAINT `CashReceiptsJournal_supplier_id_fkey` FOREIGN KEY (`supplier_id`) REFERENCES `suppliers`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CashReceiptsJournal` ADD CONSTRAINT `CashReceiptsJournal_customer_id_fkey` FOREIGN KEY (`customer_id`) REFERENCES `customers`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ReturnsInwardsJournal` ADD CONSTRAINT `ReturnsInwardsJournal_recorder_id_fkey` FOREIGN KEY (`recorder_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ReturnsInwardsJournal` ADD CONSTRAINT `ReturnsInwardsJournal_transaction_id_fkey` FOREIGN KEY (`transaction_id`) REFERENCES `transactions`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ReturnsInwardsJournal` ADD CONSTRAINT `ReturnsInwardsJournal_customer_id_fkey` FOREIGN KEY (`customer_id`) REFERENCES `customers`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ReturnsOutwardsJournal` ADD CONSTRAINT `ReturnsOutwardsJournal_recorder_id_fkey` FOREIGN KEY (`recorder_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ReturnsOutwardsJournal` ADD CONSTRAINT `ReturnsOutwardsJournal_transaction_id_fkey` FOREIGN KEY (`transaction_id`) REFERENCES `transactions`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ReturnsOutwardsJournal` ADD CONSTRAINT `ReturnsOutwardsJournal_supplier_id_fkey` FOREIGN KEY (`supplier_id`) REFERENCES `suppliers`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_PaymentTypeToTax` ADD CONSTRAINT `_PaymentTypeToTax_A_fkey` FOREIGN KEY (`A`) REFERENCES `PaymentType`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_PaymentTypeToTax` ADD CONSTRAINT `_PaymentTypeToTax_B_fkey` FOREIGN KEY (`B`) REFERENCES `Tax`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_TaxTocurrency` ADD CONSTRAINT `_TaxTocurrency_A_fkey` FOREIGN KEY (`A`) REFERENCES `Tax`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_TaxTocurrency` ADD CONSTRAINT `_TaxTocurrency_B_fkey` FOREIGN KEY (`B`) REFERENCES `currency`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_TaxToinvoice` ADD CONSTRAINT `_TaxToinvoice_A_fkey` FOREIGN KEY (`A`) REFERENCES `Tax`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_TaxToinvoice` ADD CONSTRAINT `_TaxToinvoice_B_fkey` FOREIGN KEY (`B`) REFERENCES `invoices`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ProductToTax` ADD CONSTRAINT `_ProductToTax_A_fkey` FOREIGN KEY (`A`) REFERENCES `products`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ProductToTax` ADD CONSTRAINT `_ProductToTax_B_fkey` FOREIGN KEY (`B`) REFERENCES `Tax`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- RenameIndex
ALTER TABLE `currency` RENAME INDEX `Currency_currency_name_key` TO `Currency_currencyName_key`;
