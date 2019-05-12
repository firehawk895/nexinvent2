const products = {
  count: 9,
  next: null,
  previous: null,
  results: [
    {
      id: 1,
      supplier: {
        id: 1,
        created_at: "2018-12-15T10:55:56.632579Z",
        modified_at: "2018-12-15T11:01:20.804113Z",
        name: "HK Flesh Meat",
        min_order: 0,
        sales_rep: "Loda Kumar",
        address: "",
        phone_number: "",
        email: "flesh@mailinator.com",
        gst_no: "1234"
      },
      name: "Chicken",
      sku: "001",
      unit: "1 kg",
      description: "whole chicken",
      price: "200.00"
    },
    {
      id: 2,
      supplier: {
        id: 1,
        created_at: "2018-12-15T10:55:56.632579Z",
        modified_at: "2018-12-15T11:01:20.804113Z",
        name: "HK Flesh Meat",
        min_order: 0,
        sales_rep: "Loda Kumar",
        address: "",
        phone_number: "",
        email: "flesh@mailinator.com",
        gst_no: "1234"
      },
      name: "Pepperoni",
      sku: "007",
      unit: "1 kg",
      description: "asdasdasd",
      price: "250.00"
    },
    {
      id: 3,
      supplier: {
        id: 1,
        created_at: "2018-12-15T10:55:56.632579Z",
        modified_at: "2018-12-15T11:01:20.804113Z",
        name: "HK Flesh Meat",
        min_order: 0,
        sales_rep: "Loda Kumar",
        address: "",
        phone_number: "",
        email: "flesh@mailinator.com",
        gst_no: "1234"
      },
      name: "Cheddar Cheese",
      sku: "0012",
      unit: "250 gms",
      description: "asdasd",
      price: "1500.00"
    },
    {
      id: 4,
      supplier: {
        id: 2,
        created_at: "2018-12-23T10:10:25.251141Z",
        modified_at: "2018-12-23T10:10:25.251200Z",
        name: "Tez Taaza",
        min_order: 0,
        sales_rep: "Loda Kumar",
        address: "",
        phone_number: "",
        email: "teztaza@mailinator.com",
        gst_no: "3213123123"
      },
      name: "Amul Taaza",
      sku: "12312",
      unit: "1 Litre",
      description: "asdasdasd",
      price: "200.00"
    },
    {
      id: 5,
      supplier: {
        id: 2,
        created_at: "2018-12-23T10:10:25.251141Z",
        modified_at: "2018-12-23T10:10:25.251200Z",
        name: "Tez Taaza",
        min_order: 0,
        sales_rep: "Loda Kumar",
        address: "",
        phone_number: "",
        email: "teztaza@mailinator.com",
        gst_no: "3213123123"
      },
      name: "Vicco Turmeric",
      sku: "12313",
      unit: "1 kg",
      description: "asdasd",
      price: "200.00"
    },
    {
      id: 6,
      supplier: {
        id: 2,
        created_at: "2018-12-23T10:10:25.251141Z",
        modified_at: "2018-12-23T10:10:25.251200Z",
        name: "Tez Taaza",
        min_order: 0,
        sales_rep: "Loda Kumar",
        address: "",
        phone_number: "",
        email: "teztaza@mailinator.com",
        gst_no: "3213123123"
      },
      name: "Bear liver",
      sku: "123123",
      unit: "1 kg",
      description: "asdasd",
      price: "600.00"
    },
    {
      id: 7,
      supplier: {
        id: 3,
        created_at: "2018-12-23T10:10:54.611204Z",
        modified_at: "2019-01-17T05:40:36.422401Z",
        name: "Fit Fat Falafel",
        min_order: 0,
        sales_rep: "Loda Kumar",
        address: "",
        phone_number: "",
        email: "fitfat@mailinator.com",
        gst_no: "21313123"
      },
      name: "Macac Meat",
      sku: "0014",
      unit: "1 kg",
      description: "asdasdas",
      price: "2400.00"
    },
    {
      id: 8,
      supplier: {
        id: 3,
        created_at: "2018-12-23T10:10:54.611204Z",
        modified_at: "2019-01-17T05:40:36.422401Z",
        name: "Fit Fat Falafel",
        min_order: 0,
        sales_rep: "Loda Kumar",
        address: "",
        phone_number: "",
        email: "fitfat@mailinator.com",
        gst_no: "21313123"
      },
      name: "Plankton",
      sku: "121111",
      unit: "250 gms",
      description: "sdsdff",
      price: "2000.00"
    },
    {
      id: 9,
      supplier: {
        id: 3,
        created_at: "2018-12-23T10:10:54.611204Z",
        modified_at: "2019-01-17T05:40:36.422401Z",
        name: "Fit Fat Falafel",
        min_order: 0,
        sales_rep: "Loda Kumar",
        address: "",
        phone_number: "",
        email: "fitfat@mailinator.com",
        gst_no: "21313123"
      },
      name: "Rat meat",
      sku: "110022",
      unit: "1 kg",
      description: "asdasd",
      price: "2000.00"
    }
  ]
};

const orders = {
  count: 42,
  next: "http://127.0.0.1:8000/orders/?limit=20&offset=20",
  previous: null,
  results: [
    {
      status: "submitted",
      id: 7,
      supplier: {
        id: 1,
        created_at: "2018-12-15T10:55:56.632579Z",
        modified_at: "2018-12-15T11:01:20.804113Z",
        name: "HK Flesh Meat",
        min_order: 0,
        sales_rep: "Loda Kumar",
        address: "",
        phone_number: "",
        email: "flesh@mailinator.com",
        gst_no: "1234"
      },
      supplier_name: "HK Flesh Meat",
      created_at: "2018-12-15T14:16:46.777105Z",
      requested_delivery_date: "2018-12-15T14:16:03Z",
      amount: "0.00",
      invoice_no: "hellox",
      has_comment: false,
      is_disputed: false,
      restaurant: {
        id: 1,
        created_at: "2018-12-15T11:00:41.622136Z",
        modified_at: "2018-12-15T11:00:41.622164Z",
        name: "Crustos",
        address: "",
        phone_number: "",
        email: "crustos@mailinator.com",
        total_orders: 0,
        total_order_value: "0.00",
        total_suppliers: 0,
        total_inventory_items: 0,
        fav_products: [],
        associated_suppliers: [1, 2, 3]
      }
    },
    {
      status: "submitted",
      id: 8,
      supplier: {
        id: 1,
        created_at: "2018-12-15T10:55:56.632579Z",
        modified_at: "2018-12-15T11:01:20.804113Z",
        name: "HK Flesh Meat",
        min_order: 0,
        sales_rep: "Loda Kumar",
        address: "",
        phone_number: "",
        email: "flesh@mailinator.com",
        gst_no: "1234"
      },
      supplier_name: "HK Flesh Meat",
      created_at: "2018-12-18T07:05:22.609886Z",
      requested_delivery_date: null,
      amount: "0.00",
      invoice_no: "",
      has_comment: false,
      is_disputed: false,
      restaurant: {
        id: 1,
        created_at: "2018-12-15T11:00:41.622136Z",
        modified_at: "2018-12-15T11:00:41.622164Z",
        name: "Crustos",
        address: "",
        phone_number: "",
        email: "crustos@mailinator.com",
        total_orders: 0,
        total_order_value: "0.00",
        total_suppliers: 0,
        total_inventory_items: 0,
        fav_products: [],
        associated_suppliers: [1, 2, 3]
      }
    },
    {
      status: "submitted",
      id: 9,
      supplier: {
        id: 1,
        created_at: "2018-12-15T10:55:56.632579Z",
        modified_at: "2018-12-15T11:01:20.804113Z",
        name: "HK Flesh Meat",
        min_order: 0,
        sales_rep: "Loda Kumar",
        address: "",
        phone_number: "",
        email: "flesh@mailinator.com",
        gst_no: "1234"
      },
      supplier_name: "HK Flesh Meat",
      created_at: "2018-12-18T07:05:51.994887Z",
      requested_delivery_date: null,
      amount: "0.00",
      invoice_no: "",
      has_comment: false,
      is_disputed: false,
      restaurant: {
        id: 1,
        created_at: "2018-12-15T11:00:41.622136Z",
        modified_at: "2018-12-15T11:00:41.622164Z",
        name: "Crustos",
        address: "",
        phone_number: "",
        email: "crustos@mailinator.com",
        total_orders: 0,
        total_order_value: "0.00",
        total_suppliers: 0,
        total_inventory_items: 0,
        fav_products: [],
        associated_suppliers: [1, 2, 3]
      }
    },
    {
      status: "accepted",
      id: 10,
      supplier: {
        id: 1,
        created_at: "2018-12-15T10:55:56.632579Z",
        modified_at: "2018-12-15T11:01:20.804113Z",
        name: "HK Flesh Meat",
        min_order: 0,
        sales_rep: "Loda Kumar",
        address: "",
        phone_number: "",
        email: "flesh@mailinator.com",
        gst_no: "1234"
      },
      supplier_name: "HK Flesh Meat",
      created_at: "2018-12-18T07:06:10.952552Z",
      requested_delivery_date: null,
      amount: "0.00",
      invoice_no: "",
      has_comment: false,
      is_disputed: false,
      restaurant: {
        id: 1,
        created_at: "2018-12-15T11:00:41.622136Z",
        modified_at: "2018-12-15T11:00:41.622164Z",
        name: "Crustos",
        address: "",
        phone_number: "",
        email: "crustos@mailinator.com",
        total_orders: 0,
        total_order_value: "0.00",
        total_suppliers: 0,
        total_inventory_items: 0,
        fav_products: [],
        associated_suppliers: [1, 2, 3]
      }
    },
    {
      status: "accepted",
      id: 11,
      supplier: {
        id: 1,
        created_at: "2018-12-15T10:55:56.632579Z",
        modified_at: "2018-12-15T11:01:20.804113Z",
        name: "HK Flesh Meat",
        min_order: 0,
        sales_rep: "Loda Kumar",
        address: "",
        phone_number: "",
        email: "flesh@mailinator.com",
        gst_no: "1234"
      },
      supplier_name: "HK Flesh Meat",
      created_at: "2018-12-18T07:06:34.999352Z",
      requested_delivery_date: null,
      amount: "0.00",
      invoice_no: "",
      has_comment: false,
      is_disputed: false,
      restaurant: {
        id: 1,
        created_at: "2018-12-15T11:00:41.622136Z",
        modified_at: "2018-12-15T11:00:41.622164Z",
        name: "Crustos",
        address: "",
        phone_number: "",
        email: "crustos@mailinator.com",
        total_orders: 0,
        total_order_value: "0.00",
        total_suppliers: 0,
        total_inventory_items: 0,
        fav_products: [],
        associated_suppliers: [1, 2, 3]
      }
    },
    {
      status: "submitted",
      id: 12,
      supplier: {
        id: 1,
        created_at: "2018-12-15T10:55:56.632579Z",
        modified_at: "2018-12-15T11:01:20.804113Z",
        name: "HK Flesh Meat",
        min_order: 0,
        sales_rep: "Loda Kumar",
        address: "",
        phone_number: "",
        email: "flesh@mailinator.com",
        gst_no: "1234"
      },
      supplier_name: "HK Flesh Meat",
      created_at: "2018-12-18T07:06:51.667362Z",
      requested_delivery_date: null,
      amount: "0.00",
      invoice_no: "",
      has_comment: false,
      is_disputed: false,
      restaurant: {
        id: 2,
        created_at: "2018-12-18T07:03:09.928290Z",
        modified_at: "2018-12-18T07:03:09.928319Z",
        name: "Birdies",
        address: "",
        phone_number: "",
        email: "birdies@mailinator.com",
        total_orders: 0,
        total_order_value: "0.00",
        total_suppliers: 0,
        total_inventory_items: 0,
        fav_products: [],
        associated_suppliers: []
      }
    },
    {
      status: "submitted",
      id: 13,
      supplier: {
        id: 1,
        created_at: "2018-12-15T10:55:56.632579Z",
        modified_at: "2018-12-15T11:01:20.804113Z",
        name: "HK Flesh Meat",
        min_order: 0,
        sales_rep: "Loda Kumar",
        address: "",
        phone_number: "",
        email: "flesh@mailinator.com",
        gst_no: "1234"
      },
      supplier_name: "HK Flesh Meat",
      created_at: "2018-12-22T14:03:44.981555Z",
      requested_delivery_date: null,
      amount: "0.00",
      invoice_no: "",
      has_comment: true,
      is_disputed: false,
      restaurant: {
        id: 1,
        created_at: "2018-12-15T11:00:41.622136Z",
        modified_at: "2018-12-15T11:00:41.622164Z",
        name: "Crustos",
        address: "",
        phone_number: "",
        email: "crustos@mailinator.com",
        total_orders: 0,
        total_order_value: "0.00",
        total_suppliers: 0,
        total_inventory_items: 0,
        fav_products: [],
        associated_suppliers: [1, 2, 3]
      }
    },
    {
      status: "submitted",
      id: 14,
      supplier: {
        id: 1,
        created_at: "2018-12-15T10:55:56.632579Z",
        modified_at: "2018-12-15T11:01:20.804113Z",
        name: "HK Flesh Meat",
        min_order: 0,
        sales_rep: "Loda Kumar",
        address: "",
        phone_number: "",
        email: "flesh@mailinator.com",
        gst_no: "1234"
      },
      supplier_name: "HK Flesh Meat",
      created_at: "2018-12-22T14:03:45.057985Z",
      requested_delivery_date: null,
      amount: "0.00",
      invoice_no: "",
      has_comment: true,
      is_disputed: false,
      restaurant: {
        id: 1,
        created_at: "2018-12-15T11:00:41.622136Z",
        modified_at: "2018-12-15T11:00:41.622164Z",
        name: "Crustos",
        address: "",
        phone_number: "",
        email: "crustos@mailinator.com",
        total_orders: 0,
        total_order_value: "0.00",
        total_suppliers: 0,
        total_inventory_items: 0,
        fav_products: [],
        associated_suppliers: [1, 2, 3]
      }
    },
    {
      status: "submitted",
      id: 15,
      supplier: {
        id: 1,
        created_at: "2018-12-15T10:55:56.632579Z",
        modified_at: "2018-12-15T11:01:20.804113Z",
        name: "HK Flesh Meat",
        min_order: 0,
        sales_rep: "Loda Kumar",
        address: "",
        phone_number: "",
        email: "flesh@mailinator.com",
        gst_no: "1234"
      },
      supplier_name: "HK Flesh Meat",
      created_at: "2018-12-22T14:05:10.979699Z",
      requested_delivery_date: null,
      amount: "0.00",
      invoice_no: "",
      has_comment: true,
      is_disputed: false,
      restaurant: {
        id: 1,
        created_at: "2018-12-15T11:00:41.622136Z",
        modified_at: "2018-12-15T11:00:41.622164Z",
        name: "Crustos",
        address: "",
        phone_number: "",
        email: "crustos@mailinator.com",
        total_orders: 0,
        total_order_value: "0.00",
        total_suppliers: 0,
        total_inventory_items: 0,
        fav_products: [],
        associated_suppliers: [1, 2, 3]
      }
    },
    {
      status: "submitted",
      id: 16,
      supplier: {
        id: 1,
        created_at: "2018-12-15T10:55:56.632579Z",
        modified_at: "2018-12-15T11:01:20.804113Z",
        name: "HK Flesh Meat",
        min_order: 0,
        sales_rep: "Loda Kumar",
        address: "",
        phone_number: "",
        email: "flesh@mailinator.com",
        gst_no: "1234"
      },
      supplier_name: "HK Flesh Meat",
      created_at: "2018-12-22T14:05:10.992611Z",
      requested_delivery_date: null,
      amount: "0.00",
      invoice_no: "",
      has_comment: true,
      is_disputed: false,
      restaurant: {
        id: 1,
        created_at: "2018-12-15T11:00:41.622136Z",
        modified_at: "2018-12-15T11:00:41.622164Z",
        name: "Crustos",
        address: "",
        phone_number: "",
        email: "crustos@mailinator.com",
        total_orders: 0,
        total_order_value: "0.00",
        total_suppliers: 0,
        total_inventory_items: 0,
        fav_products: [],
        associated_suppliers: [1, 2, 3]
      }
    },
    {
      status: "submitted",
      id: 17,
      supplier: {
        id: 1,
        created_at: "2018-12-15T10:55:56.632579Z",
        modified_at: "2018-12-15T11:01:20.804113Z",
        name: "HK Flesh Meat",
        min_order: 0,
        sales_rep: "Loda Kumar",
        address: "",
        phone_number: "",
        email: "flesh@mailinator.com",
        gst_no: "1234"
      },
      supplier_name: "HK Flesh Meat",
      created_at: "2018-12-22T14:15:04.924903Z",
      requested_delivery_date: null,
      amount: "0.00",
      invoice_no: "",
      has_comment: true,
      is_disputed: false,
      restaurant: {
        id: 1,
        created_at: "2018-12-15T11:00:41.622136Z",
        modified_at: "2018-12-15T11:00:41.622164Z",
        name: "Crustos",
        address: "",
        phone_number: "",
        email: "crustos@mailinator.com",
        total_orders: 0,
        total_order_value: "0.00",
        total_suppliers: 0,
        total_inventory_items: 0,
        fav_products: [],
        associated_suppliers: [1, 2, 3]
      }
    },
    {
      status: "submitted",
      id: 18,
      supplier: {
        id: 1,
        created_at: "2018-12-15T10:55:56.632579Z",
        modified_at: "2018-12-15T11:01:20.804113Z",
        name: "HK Flesh Meat",
        min_order: 0,
        sales_rep: "Loda Kumar",
        address: "",
        phone_number: "",
        email: "flesh@mailinator.com",
        gst_no: "1234"
      },
      supplier_name: "HK Flesh Meat",
      created_at: "2018-12-22T14:15:04.933807Z",
      requested_delivery_date: null,
      amount: "0.00",
      invoice_no: "",
      has_comment: true,
      is_disputed: false,
      restaurant: {
        id: 1,
        created_at: "2018-12-15T11:00:41.622136Z",
        modified_at: "2018-12-15T11:00:41.622164Z",
        name: "Crustos",
        address: "",
        phone_number: "",
        email: "crustos@mailinator.com",
        total_orders: 0,
        total_order_value: "0.00",
        total_suppliers: 0,
        total_inventory_items: 0,
        fav_products: [],
        associated_suppliers: [1, 2, 3]
      }
    },
    {
      status: "submitted",
      id: 19,
      supplier: {
        id: 1,
        created_at: "2018-12-15T10:55:56.632579Z",
        modified_at: "2018-12-15T11:01:20.804113Z",
        name: "HK Flesh Meat",
        min_order: 0,
        sales_rep: "Loda Kumar",
        address: "",
        phone_number: "",
        email: "flesh@mailinator.com",
        gst_no: "1234"
      },
      supplier_name: "HK Flesh Meat",
      created_at: "2018-12-22T14:18:53.019834Z",
      requested_delivery_date: null,
      amount: "0.00",
      invoice_no: "",
      has_comment: true,
      is_disputed: false,
      restaurant: {
        id: 1,
        created_at: "2018-12-15T11:00:41.622136Z",
        modified_at: "2018-12-15T11:00:41.622164Z",
        name: "Crustos",
        address: "",
        phone_number: "",
        email: "crustos@mailinator.com",
        total_orders: 0,
        total_order_value: "0.00",
        total_suppliers: 0,
        total_inventory_items: 0,
        fav_products: [],
        associated_suppliers: [1, 2, 3]
      }
    },
    {
      status: "submitted",
      id: 20,
      supplier: {
        id: 1,
        created_at: "2018-12-15T10:55:56.632579Z",
        modified_at: "2018-12-15T11:01:20.804113Z",
        name: "HK Flesh Meat",
        min_order: 0,
        sales_rep: "Loda Kumar",
        address: "",
        phone_number: "",
        email: "flesh@mailinator.com",
        gst_no: "1234"
      },
      supplier_name: "HK Flesh Meat",
      created_at: "2018-12-22T14:18:53.029792Z",
      requested_delivery_date: null,
      amount: "0.00",
      invoice_no: "",
      has_comment: true,
      is_disputed: false,
      restaurant: {
        id: 1,
        created_at: "2018-12-15T11:00:41.622136Z",
        modified_at: "2018-12-15T11:00:41.622164Z",
        name: "Crustos",
        address: "",
        phone_number: "",
        email: "crustos@mailinator.com",
        total_orders: 0,
        total_order_value: "0.00",
        total_suppliers: 0,
        total_inventory_items: 0,
        fav_products: [],
        associated_suppliers: [1, 2, 3]
      }
    },
    {
      status: "submitted",
      id: 21,
      supplier: {
        id: 1,
        created_at: "2018-12-15T10:55:56.632579Z",
        modified_at: "2018-12-15T11:01:20.804113Z",
        name: "HK Flesh Meat",
        min_order: 0,
        sales_rep: "Loda Kumar",
        address: "",
        phone_number: "",
        email: "flesh@mailinator.com",
        gst_no: "1234"
      },
      supplier_name: "HK Flesh Meat",
      created_at: "2018-12-22T14:20:10.878862Z",
      requested_delivery_date: null,
      amount: "0.00",
      invoice_no: "",
      has_comment: true,
      is_disputed: false,
      restaurant: {
        id: 1,
        created_at: "2018-12-15T11:00:41.622136Z",
        modified_at: "2018-12-15T11:00:41.622164Z",
        name: "Crustos",
        address: "",
        phone_number: "",
        email: "crustos@mailinator.com",
        total_orders: 0,
        total_order_value: "0.00",
        total_suppliers: 0,
        total_inventory_items: 0,
        fav_products: [],
        associated_suppliers: [1, 2, 3]
      }
    },
    {
      status: "submitted",
      id: 22,
      supplier: {
        id: 1,
        created_at: "2018-12-15T10:55:56.632579Z",
        modified_at: "2018-12-15T11:01:20.804113Z",
        name: "HK Flesh Meat",
        min_order: 0,
        sales_rep: "Loda Kumar",
        address: "",
        phone_number: "",
        email: "flesh@mailinator.com",
        gst_no: "1234"
      },
      supplier_name: "HK Flesh Meat",
      created_at: "2018-12-22T14:20:10.896862Z",
      requested_delivery_date: null,
      amount: "0.00",
      invoice_no: "",
      has_comment: true,
      is_disputed: false,
      restaurant: {
        id: 1,
        created_at: "2018-12-15T11:00:41.622136Z",
        modified_at: "2018-12-15T11:00:41.622164Z",
        name: "Crustos",
        address: "",
        phone_number: "",
        email: "crustos@mailinator.com",
        total_orders: 0,
        total_order_value: "0.00",
        total_suppliers: 0,
        total_inventory_items: 0,
        fav_products: [],
        associated_suppliers: [1, 2, 3]
      }
    },
    {
      status: "submitted",
      id: 23,
      supplier: {
        id: 1,
        created_at: "2018-12-15T10:55:56.632579Z",
        modified_at: "2018-12-15T11:01:20.804113Z",
        name: "HK Flesh Meat",
        min_order: 0,
        sales_rep: "Loda Kumar",
        address: "",
        phone_number: "",
        email: "flesh@mailinator.com",
        gst_no: "1234"
      },
      supplier_name: "HK Flesh Meat",
      created_at: "2018-12-22T14:20:53.891695Z",
      requested_delivery_date: null,
      amount: "0.00",
      invoice_no: "",
      has_comment: true,
      is_disputed: false,
      restaurant: {
        id: 1,
        created_at: "2018-12-15T11:00:41.622136Z",
        modified_at: "2018-12-15T11:00:41.622164Z",
        name: "Crustos",
        address: "",
        phone_number: "",
        email: "crustos@mailinator.com",
        total_orders: 0,
        total_order_value: "0.00",
        total_suppliers: 0,
        total_inventory_items: 0,
        fav_products: [],
        associated_suppliers: [1, 2, 3]
      }
    },
    {
      status: "submitted",
      id: 24,
      supplier: {
        id: 1,
        created_at: "2018-12-15T10:55:56.632579Z",
        modified_at: "2018-12-15T11:01:20.804113Z",
        name: "HK Flesh Meat",
        min_order: 0,
        sales_rep: "Loda Kumar",
        address: "",
        phone_number: "",
        email: "flesh@mailinator.com",
        gst_no: "1234"
      },
      supplier_name: "HK Flesh Meat",
      created_at: "2018-12-22T14:20:53.899441Z",
      requested_delivery_date: null,
      amount: "0.00",
      invoice_no: "",
      has_comment: true,
      is_disputed: false,
      restaurant: {
        id: 1,
        created_at: "2018-12-15T11:00:41.622136Z",
        modified_at: "2018-12-15T11:00:41.622164Z",
        name: "Crustos",
        address: "",
        phone_number: "",
        email: "crustos@mailinator.com",
        total_orders: 0,
        total_order_value: "0.00",
        total_suppliers: 0,
        total_inventory_items: 0,
        fav_products: [],
        associated_suppliers: [1, 2, 3]
      }
    },
    {
      status: "submitted",
      id: 25,
      supplier: {
        id: 1,
        created_at: "2018-12-15T10:55:56.632579Z",
        modified_at: "2018-12-15T11:01:20.804113Z",
        name: "HK Flesh Meat",
        min_order: 0,
        sales_rep: "Loda Kumar",
        address: "",
        phone_number: "",
        email: "flesh@mailinator.com",
        gst_no: "1234"
      },
      supplier_name: "HK Flesh Meat",
      created_at: "2018-12-22T14:21:46.094166Z",
      requested_delivery_date: null,
      amount: "0.00",
      invoice_no: "",
      has_comment: true,
      is_disputed: false,
      restaurant: {
        id: 1,
        created_at: "2018-12-15T11:00:41.622136Z",
        modified_at: "2018-12-15T11:00:41.622164Z",
        name: "Crustos",
        address: "",
        phone_number: "",
        email: "crustos@mailinator.com",
        total_orders: 0,
        total_order_value: "0.00",
        total_suppliers: 0,
        total_inventory_items: 0,
        fav_products: [],
        associated_suppliers: [1, 2, 3]
      }
    },
    {
      status: "submitted",
      id: 26,
      supplier: {
        id: 1,
        created_at: "2018-12-15T10:55:56.632579Z",
        modified_at: "2018-12-15T11:01:20.804113Z",
        name: "HK Flesh Meat",
        min_order: 0,
        sales_rep: "Loda Kumar",
        address: "",
        phone_number: "",
        email: "flesh@mailinator.com",
        gst_no: "1234"
      },
      supplier_name: "HK Flesh Meat",
      created_at: "2018-12-22T14:22:36.567004Z",
      requested_delivery_date: null,
      amount: "0.00",
      invoice_no: "",
      has_comment: true,
      is_disputed: false,
      restaurant: {
        id: 1,
        created_at: "2018-12-15T11:00:41.622136Z",
        modified_at: "2018-12-15T11:00:41.622164Z",
        name: "Crustos",
        address: "",
        phone_number: "",
        email: "crustos@mailinator.com",
        total_orders: 0,
        total_order_value: "0.00",
        total_suppliers: 0,
        total_inventory_items: 0,
        fav_products: [],
        associated_suppliers: [1, 2, 3]
      }
    }
  ]
};
// const authors = [
//   { id: 1, name: "Cory House" },
//   { id: 2, name: "Scott Allen" },
//   { id: 3, name: "Dan Wahlin" }
// ];

// const newCourse = {
//   id: null,
//   title: "",
//   authorId: null,
//   category: ""
// };
const carts = {
  count: 3,
  next: null,
  previous: null,
  results: [
    {
      supplier: {
        id: 1,
        created_at: "2018-12-15T10:55:56.632579Z",
        modified_at: "2018-12-15T11:01:20.804113Z",
        name: "HK Flesh Meat",
        min_order: 0,
        sales_rep: "Loda Kumar",
        address: "",
        phone_number: "",
        email: "flesh@mailinator.com",
        gst_no: "1234"
      },
      product: {
        id: 2,
        created_at: "2018-12-23T10:11:36.560624Z",
        modified_at: "2018-12-23T10:11:36.560654Z",
        name: "Pepperoni",
        sku: "007",
        unit: "1 kg",
        description: "asdasdasd",
        price: "250.00",
        supplier: 1
      },
      restaurant: {
        id: 1,
        created_at: "2018-12-15T11:00:41.622136Z",
        modified_at: "2018-12-15T11:00:41.622164Z",
        name: "Crustos",
        address: "",
        phone_number: "",
        email: "crustos@mailinator.com",
        total_orders: 0,
        total_order_value: "0.00",
        total_suppliers: 0,
        total_inventory_items: 0,
        fav_products: [],
        associated_suppliers: [1, 2, 3]
      },
      quantity: 2,
      note: "dont know should there be a note"
    },
    {
      supplier: {
        id: 1,
        created_at: "2018-12-15T10:55:56.632579Z",
        modified_at: "2018-12-15T11:01:20.804113Z",
        name: "HK Flesh Meat",
        min_order: 0,
        sales_rep: "Loda Kumar",
        address: "",
        phone_number: "",
        email: "flesh@mailinator.com",
        gst_no: "1234"
      },
      product: {
        id: 3,
        created_at: "2018-12-23T10:12:33.439648Z",
        modified_at: "2018-12-23T10:12:33.439698Z",
        name: "Cheddar Cheese",
        sku: "0012",
        unit: "250 gms",
        description: "asdasd",
        price: "1500.00",
        supplier: 1
      },
      restaurant: {
        id: 1,
        created_at: "2018-12-15T11:00:41.622136Z",
        modified_at: "2018-12-15T11:00:41.622164Z",
        name: "Crustos",
        address: "",
        phone_number: "",
        email: "crustos@mailinator.com",
        total_orders: 0,
        total_order_value: "0.00",
        total_suppliers: 0,
        total_inventory_items: 0,
        fav_products: [],
        associated_suppliers: [1, 2, 3]
      },
      quantity: 5,
      note: "dont know should there be a note"
    },
    {
      supplier: {
        id: 2,
        created_at: "2018-12-23T10:10:25.251141Z",
        modified_at: "2018-12-23T10:10:25.251200Z",
        name: "Tez Taaza",
        min_order: 0,
        sales_rep: "Loda Kumar",
        address: "",
        phone_number: "",
        email: "teztaza@mailinator.com",
        gst_no: "3213123123"
      },
      product: {
        id: 5,
        created_at: "2018-12-23T10:13:10.947719Z",
        modified_at: "2018-12-23T10:13:10.947759Z",
        name: "Vicco Turmeric",
        sku: "12313",
        unit: "1 kg",
        description: "asdasd",
        price: "200.00",
        supplier: 2
      },
      restaurant: {
        id: 1,
        created_at: "2018-12-15T11:00:41.622136Z",
        modified_at: "2018-12-15T11:00:41.622164Z",
        name: "Crustos",
        address: "",
        phone_number: "",
        email: "crustos@mailinator.com",
        total_orders: 0,
        total_order_value: "0.00",
        total_suppliers: 0,
        total_inventory_items: 0,
        fav_products: [],
        associated_suppliers: [1, 2, 3]
      },
      quantity: 3,
      note: "look ma its a note"
    }
  ]
};
// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  orders,
  products,
  carts
};
