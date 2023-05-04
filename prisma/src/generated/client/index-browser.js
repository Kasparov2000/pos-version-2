
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.0.0
 * Query Engine version: da41d2bb3406da22087b849f0e911199ba4fbf11
 */
Prisma.prismaVersion = {
  client: "4.0.0",
  engine: "da41d2bb3406da22087b849f0e911199ba4fbf11"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.UserScalarFieldEnum = makeEnum({
  id: 'id',
  firstName: 'firstName',
  lastName: 'lastName',
  username: 'username',
  password: 'password',
  phoneNumber: 'phoneNumber',
  isAdmin: 'isAdmin',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  lastLogin: 'lastLogin',
  emailAddress: 'emailAddress'
});

exports.Prisma.ActionScalarFieldEnum = makeEnum({
  id: 'id',
  userId: 'userId',
  actionType: 'actionType',
  description: 'description'
});

exports.Prisma.TransactionScalarFieldEnum = makeEnum({
  id: 'id',
  initiatedBy: 'initiatedBy',
  createdAt: 'createdAt',
  totalPaid: 'totalPaid',
  totalPayable: 'totalPayable',
  supplierId: 'supplierId',
  errorDescription: 'errorDescription',
  customerId: 'customerId',
  type: 'type',
  status: 'status'
});

exports.Prisma.PaymentScalarFieldEnum = makeEnum({
  id: 'id',
  paymentTypeId: 'paymentTypeId',
  currencyId: 'currencyId',
  exchangeRateId: 'exchangeRateId',
  transactionId: 'transactionId',
  paid: 'paid'
});

exports.Prisma.PaymentTypeScalarFieldEnum = makeEnum({
  id: 'id',
  paymentTypeName: 'paymentTypeName',
  charges: 'charges',
  discount: 'discount'
});

exports.Prisma.TaxScalarFieldEnum = makeEnum({
  id: 'id',
  taxName: 'taxName',
  taxRate: 'taxRate',
  startAmount: 'startAmount',
  endAmount: 'endAmount',
  active: 'active',
  startDate: 'startDate',
  endDate: 'endDate'
});

exports.Prisma.PromotionsScalarFieldEnum = makeEnum({
  id: 'id',
  productId: 'productId',
  productGroupId: 'productGroupId',
  startDate: 'startDate',
  endDate: 'endDate',
  discountRate: 'discountRate'
});

exports.Prisma.ProductGroupScalarFieldEnum = makeEnum({
  id: 'id',
  taxId: 'taxId'
});

exports.Prisma.ProductScalarFieldEnum = makeEnum({
  id: 'id',
  barcode: 'barcode',
  productName: 'productName',
  measurementUnit: 'measurementUnit',
  expiryDate: 'expiryDate',
  measurementAmount: 'measurementAmount',
  cost: 'cost',
  quantity: 'quantity',
  supplierId: 'supplierId',
  productGroupId: 'productGroupId',
  updatedAt: 'updatedAt',
  createdAt: 'createdAt',
  depleted: 'depleted',
  disposed: 'disposed'
});

exports.Prisma.PricesScalarFieldEnum = makeEnum({
  id: 'id',
  barcode: 'barcode',
  price: 'price',
  active: 'active',
  exchangeRateId: 'exchangeRateId',
  productId: 'productId'
});

exports.Prisma.InvoiceScalarFieldEnum = makeEnum({
  id: 'id',
  productId: 'productId',
  discount: 'discount',
  price: 'price',
  quantity: 'quantity',
  transactionId: 'transactionId',
  cashierId: 'cashierId',
  customerId: 'customerId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  supplierId: 'supplierId'
});

exports.Prisma.SupplierScalarFieldEnum = makeEnum({
  id: 'id',
  firstName: 'firstName',
  lastName: 'lastName',
  phoneNumber: 'phoneNumber',
  corporateName: 'corporateName',
  updatedAt: 'updatedAt',
  createdAt: 'createdAt',
  emailAddress: 'emailAddress'
});

exports.Prisma.CustomerScalarFieldEnum = makeEnum({
  id: 'id',
  firstName: 'firstName',
  lastName: 'lastName',
  phoneNumber: 'phoneNumber',
  emailAddress: 'emailAddress',
  updatedAt: 'updatedAt',
  createdAt: 'createdAt'
});

exports.Prisma.AddressScalarFieldEnum = makeEnum({
  id: 'id',
  supplierId: 'supplierId',
  customerId: 'customerId',
  street: 'street',
  city: 'city',
  country: 'country',
  zip: 'zip'
});

exports.Prisma.BaseCurrencyScalarFieldEnum = makeEnum({
  id: 'id',
  currencyId: 'currencyId',
  createdAt: 'createdAt',
  active: 'active'
});

exports.Prisma.CurrencyScalarFieldEnum = makeEnum({
  id: 'id',
  currencyName: 'currencyName',
  updatedAt: 'updatedAt',
  createdAt: 'createdAt'
});

exports.Prisma.DisposalsScalarFieldEnum = makeEnum({
  id: 'id',
  productId: 'productId',
  priceId: 'priceId',
  createdAt: 'createdAt'
});

exports.Prisma.ExchangeRatesScalarFieldEnum = makeEnum({
  id: 'id',
  exchangeRate: 'exchangeRate',
  currencyId: 'currencyId',
  createdAt: 'createdAt',
  baseCurrencyId: 'baseCurrencyId',
  active: 'active'
});

exports.Prisma.JournalScalarFieldEnum = makeEnum({
  id: 'id',
  recorderId: 'recorderId',
  supplierId: 'supplierId',
  customerId: 'customerId',
  transactionId: 'transactionId',
  narration: 'narration',
  amount: 'amount'
});

exports.Prisma.SalesJournalScalarFieldEnum = makeEnum({
  id: 'id',
  recorderId: 'recorderId',
  supplierId: 'supplierId',
  transactionId: 'transactionId',
  narration: 'narration',
  amount: 'amount'
});

exports.Prisma.PurchasesJournalScalarFieldEnum = makeEnum({
  id: 'id',
  recorderId: 'recorderId',
  customerId: 'customerId',
  transactionId: 'transactionId',
  narration: 'narration',
  amount: 'amount'
});

exports.Prisma.CashDisbursementsJournalScalarFieldEnum = makeEnum({
  id: 'id',
  recorderId: 'recorderId',
  supplierId: 'supplierId',
  customerId: 'customerId',
  transactionId: 'transactionId',
  narration: 'narration',
  amount: 'amount'
});

exports.Prisma.CashReceiptsJournalScalarFieldEnum = makeEnum({
  id: 'id',
  recorderId: 'recorderId',
  supplierId: 'supplierId',
  customerId: 'customerId',
  transactionId: 'transactionId',
  narration: 'narration',
  amount: 'amount'
});

exports.Prisma.ReturnsInwardsJournalScalarFieldEnum = makeEnum({
  id: 'id',
  recorderId: 'recorderId',
  customerId: 'customerId',
  transactionId: 'transactionId',
  narration: 'narration',
  amount: 'amount'
});

exports.Prisma.ReturnsOutwardsJournalScalarFieldEnum = makeEnum({
  id: 'id',
  recorderId: 'recorderId',
  supplierId: 'supplierId',
  transactionId: 'transactionId',
  narration: 'narration',
  amount: 'amount'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});
exports.TransactionType = makeEnum({
  PURCHASE: 'PURCHASE',
  SALES: 'SALES'
});

exports.TransactionStatusCodes = makeEnum({
  PENDING: 'PENDING',
  FAILED: 'FAILED',
  SUCCEEDED: 'SUCCEEDED'
});

exports.MeasurementUnit = makeEnum({
  KILOGRAMS: 'KILOGRAMS',
  GRAMS: 'GRAMS',
  LITRES: 'LITRES',
  MILLILITRES: 'MILLILITRES'
});

exports.Prisma.ModelName = makeEnum({
  User: 'User',
  Action: 'Action',
  Transaction: 'Transaction',
  Payment: 'Payment',
  PaymentType: 'PaymentType',
  Tax: 'Tax',
  Promotions: 'Promotions',
  ProductGroup: 'ProductGroup',
  Product: 'Product',
  Prices: 'Prices',
  invoice: 'invoice',
  Supplier: 'Supplier',
  Customer: 'Customer',
  Address: 'Address',
  baseCurrency: 'baseCurrency',
  currency: 'currency',
  disposals: 'disposals',
  exchangeRates: 'exchangeRates',
  Journal: 'Journal',
  SalesJournal: 'SalesJournal',
  PurchasesJournal: 'PurchasesJournal',
  CashDisbursementsJournal: 'CashDisbursementsJournal',
  CashReceiptsJournal: 'CashReceiptsJournal',
  ReturnsInwardsJournal: 'ReturnsInwardsJournal',
  ReturnsOutwardsJournal: 'ReturnsOutwardsJournal'
});

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
