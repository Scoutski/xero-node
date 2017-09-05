'use strict';

const _ = require('lodash');

const HELPERS = {
  organisations: { file: 'organisations' },
  contacts: { file: 'contacts' },
  items: { file: 'items' },
  bankTransactions: { file: 'banktransactions' },
  bankTransfers: { file: 'banktransfers' },
  brandingThemes: { file: 'brandingthemes' },
  currencies: { file: 'currencies' },
  journals: { file: 'journals' },
  attachments: { file: 'attachments' },
  accounts: { file: 'accounts' },
  invoices: { file: 'invoices' },
  trackingCategories: { file: 'trackingcategories' },
  invoiceReminders: { file: 'invoicereminders' },
  creditNotes: { file: 'creditnotes' },
  users: { file: 'users' },
  payments: { file: 'payments' },
  taxRates: { file: 'taxrates' },
  reports: { file: 'reports' },
  manualjournals: { file: 'manualjournals' },
  repeatinginvoices: { file: 'repeatinginvoices' },
  contactGroups: { file: 'contactgroups' },
  employees: { file: 'employees' },
  receipts: { file: 'receipts' },
};

function Core(application) {
  const self = this;

  this._application = application;

  _.each(HELPERS, function(entityHelper, id) {
    const instance = new (require(`./entity_helpers/accounting/${entityHelper.file}`))(
      application
    );
    Object.defineProperty(self, id, {
      get() {
        return instance;
      },
    });
  });
}

module.exports = Core;
