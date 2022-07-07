/**
 * Build the Redux initial state.
 *
 * @returns {object} - State.
 */
export function buildInitialState() {
	return {
		jetpack: {
			initialState: {
				products: {
					backup: {
						title: 'Jetpack Backup',
						slug: 'jetpack_backup_daily',
						description:
							'Never lose a word, image, page, or time worrying about your site with automated backups & one-click restores.',
						show_promotion: true,
						discount_percent: 50,
						included_in_plans: [ 'security' ],
						features: [
							'Real-time cloud backups',
							'10GB of backup storage',
							'30-day archive & activity log',
							'One-click restores',
						],
					},
					scan: {
						title: 'Jetpack Scan',
						slug: 'jetpack_scan',
						description:
							'Automatic scanning and one-click fixes keep your site one step ahead of security threats and malware.',
						show_promotion: true,
						discount_percent: 50,
						included_in_plans: [ 'security' ],
						features: [
							'Automated daily scanning',
							'One-click fixes for most issues',
							'Instant email notifications',
							'Access to latest Firewall rules',
						],
					},
					search: {
						title: 'Jetpack Site Search',
						slug: 'jetpack_search',
						description:
							'Help your site visitors find answers instantly so they keep reading and buying. Great for sites with a lot of content.',
						show_promotion: true,
						discount_percent: 50,
						included_in_plans: [],
						features: [
							'Instant search and indexing',
							'Powerful filtering',
							'Supports 29 languages',
							'Spelling correction',
						],
					},
					akismet: {
						title: 'Jetpack Anti-Spam',
						slug: 'jetpack_anti_spam',
						description:
							'Save time and get better responses by automatically blocking spam from your comments and forms.',
						show_promotion: true,
						discount_percent: 50,
						included_in_plans: [ 'security' ],
						features: [
							'Comment and form spam protection',
							'Powered by Akismet',
							'Block spam without CAPTCHAs',
							'Advanced stats',
						],
					},
					security: {
						title: 'Security Bundle',
						slug: 'jetpack_security_daily',
						description: 'Comprehensive site security, including Backup, Scan, and Anti-spam.',
						show_promotion: true,
						discount_percent: 50,
						included_in_plans: [],
						features: [
							'Real-time cloud backups with 10GB storage',
							'Automated real-time malware scan',
							'One-click fixes for most threats',
							'Comment & form spam protection',
						],
					},
				},
			},
			products: {
				items: {
					jetpack_security_daily: {
						product_slug: 'jetpack_security_daily',
						available: true,
						cost_display: '100.00 USD',
						cost: 100,
						currency_code: 'USD',
					},
					jetpack_backup_daily: {
						product_slug: 'jetpack_backup_daily',
						available: true,
						cost: 100,
						currency_code: 'USD',
					},
					jetpack_anti_spam: {
						product_slug: 'jetpack_anti_spam',
						available: true,
						cost_display: '100.00 USD',
						cost: 100,
						currency_code: 'USD',
					},
					jetpack_search: {
						product_slug: 'jetpack_search',
						available: true,
						cost: 100,
						currency_code: 'USD',
					},
				},
				requests: {
					isFetching: false,
				},
			},
			siteProducts: {
				items: {
					jetpack_premium: {
						product_id: 2000,
						product_name: 'Jetpack Premium',
						product_slug: 'jetpack_premium',
						description: 'Daily Backups, Automated Restores and Spam Protection',
						product_type: 'bundle',
						available: true,
						billing_product_slug: 'jetpack-premium',
						is_domain_registration: false,
						cost_display: '$99.00',
						combined_cost_display: '$99.00',
						cost: 99,
						currency_code: 'USD',
						price_tier_list: [],
						price_tier_usage_quantity: null,
						product_term: 'year',
						price_tiers: [],
						price_tier_slug: '',
					},
					jetpack_business: {
						product_id: 2001,
						product_name: 'Jetpack Professional',
						product_slug: 'jetpack_business',
						description: 'Daily Backups, Security Scanning, Spam Protection, Polls and Surveys',
						product_type: 'bundle',
						available: true,
						billing_product_slug: 'jetpack-business',
						is_domain_registration: false,
						cost_display: '$299.00',
						combined_cost_display: '$299.00',
						cost: 299,
						currency_code: 'USD',
						price_tier_list: [],
						price_tier_usage_quantity: null,
						product_term: 'year',
						price_tiers: [],
						price_tier_slug: '',
					},
					jetpack_free: {
						product_id: 2002,
						product_name: 'Jetpack Free',
						product_slug: 'jetpack_free',
						description: '',
						product_type: 'jetpack',
						available: true,
						billing_product_slug: 'jetpack-free',
						is_domain_registration: false,
						cost_display: '$0.00',
						combined_cost_display: '$0.00',
						cost: 0,
						currency_code: 'USD',
						price_tier_list: [],
						price_tier_usage_quantity: null,
						product_term: 'one time',
						price_tiers: [],
						price_tier_slug: '',
					},
					jetpack_premium_monthly: {
						product_id: 2003,
						product_name: 'Jetpack Premium',
						product_slug: 'jetpack_premium_monthly',
						description: 'Daily Backups, Security Scanning, Spam Protection',
						product_type: 'bundle',
						available: true,
						billing_product_slug: 'jetpack-premium',
						is_domain_registration: false,
						cost_display: '$9.00',
						combined_cost_display: '$9.00',
						cost: 9,
						currency_code: 'USD',
						price_tier_list: [],
						price_tier_usage_quantity: null,
						product_term: 'month',
						price_tiers: [],
						price_tier_slug: '',
					},
					jetpack_business_monthly: {
						product_id: 2004,
						product_name: 'Jetpack Professional',
						product_slug: 'jetpack_business_monthly',
						description: 'Daily Backups, Malware Scanning, Threat Resolution, Spam Protection',
						product_type: 'bundle',
						available: true,
						billing_product_slug: 'jetpack-business',
						is_domain_registration: false,
						cost_display: '$29.00',
						combined_cost_display: '$29.00',
						cost: 29,
						currency_code: 'USD',
						price_tier_list: [],
						price_tier_usage_quantity: null,
						product_term: 'month',
						price_tiers: [],
						price_tier_slug: '',
					},
					jetpack_personal: {
						product_id: 2005,
						product_name: 'Jetpack Personal',
						product_slug: 'jetpack_personal',
						description:
							'Daily backups, Spam protection, plus all the features you already love from Jetpack',
						product_type: 'bundle',
						available: true,
						billing_product_slug: 'jetpack-personal',
						is_domain_registration: false,
						cost_display: '$39.00',
						combined_cost_display: '$39.00',
						cost: 39,
						currency_code: 'USD',
						price_tier_list: [],
						price_tier_usage_quantity: null,
						product_term: 'year',
						price_tiers: [],
						price_tier_slug: '',
					},
					jetpack_personal_monthly: {
						product_id: 2006,
						product_name: 'Jetpack Personal',
						product_slug: 'jetpack_personal_monthly',
						description: 'Daily Backups, Malware Scanning, Threat Resolution, Spam Protection',
						product_type: 'bundle',
						available: true,
						billing_product_slug: 'jetpack-personal',
						is_domain_registration: false,
						cost_display: '$3.50',
						combined_cost_display: '$3.50',
						cost: 3.5,
						currency_code: 'USD',
						price_tier_list: [],
						price_tier_usage_quantity: null,
						product_term: 'month',
						price_tiers: [],
						price_tier_slug: '',
					},
					jetpack_security_daily: {
						product_id: 2010,
						product_name: 'Jetpack Security Daily',
						product_slug: 'jetpack_security_daily',
						description: '',
						product_type: 'jetpack',
						available: true,
						billing_product_slug: 'jetpack-security-daily',
						is_domain_registration: false,
						cost_display: '$299.00',
						combined_cost_display: '$299.00',
						cost: 299,
						currency_code: 'USD',
						price_tier_list: [],
						price_tier_usage_quantity: null,
						product_term: 'year',
						price_tiers: [],
						price_tier_slug: '',
						introductory_offer: {
							interval_unit: 'year',
							interval_count: 1,
							usage_limit: null,
							cost_per_interval: 149,
							transition_after_renewal_count: 0,
							should_prorate_when_offer_ends: false,
						},
					},
					jetpack_security_daily_monthly: {
						product_id: 2011,
						product_name: 'Jetpack Security Daily',
						product_slug: 'jetpack_security_daily_monthly',
						description: '',
						product_type: 'jetpack',
						available: true,
						billing_product_slug: 'jetpack-security-daily',
						is_domain_registration: false,
						cost_display: '$24.95',
						combined_cost_display: '$24.95',
						cost: 24.95,
						currency_code: 'USD',
						price_tier_list: [],
						price_tier_usage_quantity: null,
						product_term: 'month',
						price_tiers: [],
						price_tier_slug: '',
					},
					jetpack_security_realtime: {
						product_id: 2012,
						product_name: 'Jetpack Security Real-time',
						product_slug: 'jetpack_security_realtime',
						description: '',
						product_type: 'jetpack',
						available: true,
						billing_product_slug: 'jetpack-security-realtime',
						is_domain_registration: false,
						cost_display: '$839.00',
						combined_cost_display: '$839.00',
						cost: 839,
						currency_code: 'USD',
						price_tier_list: [],
						price_tier_usage_quantity: null,
						product_term: 'year',
						price_tiers: [],
						price_tier_slug: '',
						introductory_offer: {
							interval_unit: 'year',
							interval_count: 1,
							usage_limit: null,
							cost_per_interval: 419,
							transition_after_renewal_count: 0,
							should_prorate_when_offer_ends: false,
						},
					},
					jetpack_security_realtime_monthly: {
						product_id: 2013,
						product_name: 'Jetpack Security Real-time',
						product_slug: 'jetpack_security_realtime_monthly',
						description: '',
						product_type: 'jetpack',
						available: true,
						billing_product_slug: 'jetpack-security-realtime',
						is_domain_registration: false,
						cost_display: '$69.95',
						combined_cost_display: '$69.95',
						cost: 69.95,
						currency_code: 'USD',
						price_tier_list: [],
						price_tier_usage_quantity: null,
						product_term: 'month',
						price_tiers: [],
						price_tier_slug: '',
					},
					jetpack_complete: {
						product_id: 2014,
						product_name: 'Jetpack Complete',
						product_slug: 'jetpack_complete',
						description: '',
						product_type: 'jetpack',
						available: true,
						billing_product_slug: 'jetpack-complete',
						is_domain_registration: false,
						cost_display: '$1,199.40',
						combined_cost_display: '$1,199.40',
						cost: 1199.4,
						currency_code: 'USD',
						price_tier_list: [],
						price_tier_usage_quantity: null,
						product_term: 'year',
						price_tiers: [],
						price_tier_slug: '',
						introductory_offer: {
							interval_unit: 'year',
							interval_count: 1,
							usage_limit: null,
							cost_per_interval: 479.4,
							transition_after_renewal_count: 0,
							should_prorate_when_offer_ends: false,
						},
					},
					jetpack_complete_monthly: {
						product_id: 2015,
						product_name: 'Jetpack Complete',
						product_slug: 'jetpack_complete_monthly',
						description: '',
						product_type: 'jetpack',
						available: true,
						billing_product_slug: 'jetpack-complete',
						is_domain_registration: false,
						cost_display: '$99.95',
						combined_cost_display: '$99.95',
						cost: 99.95,
						currency_code: 'USD',
						price_tier_list: [],
						price_tier_usage_quantity: null,
						product_term: 'month',
						price_tiers: [],
						price_tier_slug: '',
					},
					jetpack_security_t1_yearly: {
						product_id: 2016,
						product_name: 'Jetpack Security (10GB)',
						product_slug: 'jetpack_security_t1_yearly',
						description: '',
						product_type: 'bundle',
						available: true,
						billing_product_slug: 'jetpack-security-tier-1',
						is_domain_registration: false,
						cost_display: '$299.40',
						combined_cost_display: '$299.40',
						cost: 299.4,
						currency_code: 'USD',
						price_tier_list: [],
						price_tier_usage_quantity: null,
						product_term: 'year',
						price_tiers: [],
						price_tier_slug: '',
						introductory_offer: {
							interval_unit: 'year',
							interval_count: 1,
							usage_limit: null,
							cost_per_interval: 131.4,
							transition_after_renewal_count: 0,
							should_prorate_when_offer_ends: false,
						},
					},
					jetpack_security_t1_monthly: {
						product_id: 2017,
						product_name: 'Jetpack Security (10GB)',
						product_slug: 'jetpack_security_t1_monthly',
						description: '',
						product_type: 'bundle',
						available: true,
						billing_product_slug: 'jetpack-security-tier-1',
						is_domain_registration: false,
						cost_display: '$24.95',
						combined_cost_display: '$24.95',
						cost: 24.95,
						currency_code: 'USD',
						price_tier_list: [],
						price_tier_usage_quantity: null,
						product_term: 'month',
						price_tiers: [],
						price_tier_slug: '',
					},
					jetpack_security_t2_yearly: {
						product_id: 2019,
						product_name: 'Jetpack Security (1TB)',
						product_slug: 'jetpack_security_t2_yearly',
						description: '',
						product_type: 'bundle',
						available: true,
						billing_product_slug: 'jetpack-security-tier-2',
						is_domain_registration: false,
						cost_display: '$899.40',
						combined_cost_display: '$899.40',
						cost: 899.4,
						currency_code: 'USD',
						price_tier_list: [],
						price_tier_usage_quantity: null,
						product_term: 'year',
						price_tiers: [],
						price_tier_slug: '',
						introductory_offer: {
							interval_unit: 'year',
							interval_count: 1,
							usage_limit: null,
							cost_per_interval: 359.4,
							transition_after_renewal_count: 0,
							should_prorate_when_offer_ends: false,
						},
					},
					jetpack_security_t2_monthly: {
						product_id: 2020,
						product_name: 'Jetpack Security (1TB)',
						product_slug: 'jetpack_security_t2_monthly',
						description: '',
						product_type: 'bundle',
						available: true,
						billing_product_slug: 'jetpack-security-tier-2',
						is_domain_registration: false,
						cost_display: '$74.95',
						combined_cost_display: '$74.95',
						cost: 74.95,
						currency_code: 'USD',
						price_tier_list: [],
						price_tier_usage_quantity: null,
						product_term: 'month',
						price_tiers: [],
						price_tier_slug: '',
					},
					jetpack_backup_daily: {
						product_id: 2100,
						product_name: 'Jetpack Backup (Daily)',
						product_slug: 'jetpack_backup_daily',
						description: '',
						product_type: 'jetpack',
						available: true,
						billing_product_slug: 'jetpack-backup-daily',
						is_domain_registration: false,
						cost_display: '$119.00',
						combined_cost_display: '$119.00',
						cost: 119,
						currency_code: 'USD',
						price_tier_list: [],
						price_tier_usage_quantity: null,
						product_term: 'year',
						price_tiers: [],
						price_tier_slug: '',
						introductory_offer: {
							interval_unit: 'year',
							interval_count: 1,
							usage_limit: null,
							cost_per_interval: 59,
							transition_after_renewal_count: 0,
							should_prorate_when_offer_ends: false,
						},
					},
					jetpack_backup_daily_monthly: {
						product_id: 2101,
						product_name: 'Jetpack Backup (Daily)',
						product_slug: 'jetpack_backup_daily_monthly',
						description: '',
						product_type: 'jetpack',
						available: true,
						billing_product_slug: 'jetpack-backup-daily',
						is_domain_registration: false,
						cost_display: '$9.95',
						combined_cost_display: '$9.95',
						cost: 9.95,
						currency_code: 'USD',
						price_tier_list: [],
						price_tier_usage_quantity: null,
						product_term: 'month',
						price_tiers: [],
						price_tier_slug: '',
					},
					jetpack_backup_realtime: {
						product_id: 2102,
						product_name: 'Jetpack Backup (Real-time)',
						product_slug: 'jetpack_backup_realtime',
						description: '',
						product_type: 'jetpack',
						available: true,
						billing_product_slug: 'jetpack-backup-realtime',
						is_domain_registration: false,
						cost_display: '$599.00',
						combined_cost_display: '$599.00',
						cost: 599,
						currency_code: 'USD',
						price_tier_list: [],
						price_tier_usage_quantity: null,
						product_term: 'year',
						price_tiers: [],
						price_tier_slug: '',
						introductory_offer: {
							interval_unit: 'year',
							interval_count: 1,
							usage_limit: null,
							cost_per_interval: 299,
							transition_after_renewal_count: 0,
							should_prorate_when_offer_ends: false,
						},
					},
					jetpack_backup_realtime_monthly: {
						product_id: 2103,
						product_name: 'Jetpack Backup (Real-time)',
						product_slug: 'jetpack_backup_realtime_monthly',
						description: '',
						product_type: 'jetpack',
						available: true,
						billing_product_slug: 'jetpack-backup-realtime',
						is_domain_registration: false,
						cost_display: '$49.95',
						combined_cost_display: '$49.95',
						cost: 49.95,
						currency_code: 'USD',
						price_tier_list: [],
						price_tier_usage_quantity: null,
						product_term: 'month',
						price_tiers: [],
						price_tier_slug: '',
					},
					jetpack_search: {
						product_id: 2104,
						product_name: 'Jetpack Search',
						product_slug: 'jetpack_search',
						description: '',
						product_type: 'search',
						available: true,
						billing_product_slug: 'jetpack-search',
						is_domain_registration: false,
						cost_display: '$119.00',
						combined_cost_display: '$119.00',
						cost: 119,
						currency_code: 'USD',
						price_tier_list: [
							{
								minimum_units: 0,
								maximum_units: 100,
								minimum_price: 5995,
								minimum_price_display: '$59.95',
								minimum_price_monthly_display: '$5',
								maximum_price: 5995,
								maximum_price_display: '$59.95',
								maximum_price_monthly_display: '$5',
							},
							{
								minimum_units: 101,
								maximum_units: 1000,
								minimum_price: 11900,
								minimum_price_display: '$119',
								minimum_price_monthly_display: '$9.92',
								maximum_price: 11900,
								maximum_price_display: '$119',
								maximum_price_monthly_display: '$9.92',
							},
							{
								minimum_units: 1001,
								maximum_units: 10000,
								minimum_price: 29995,
								minimum_price_display: '$299.95',
								minimum_price_monthly_display: '$25',
								maximum_price: 29995,
								maximum_price_display: '$299.95',
								maximum_price_monthly_display: '$25',
							},
							{
								minimum_units: 10001,
								maximum_units: 100000,
								minimum_price: 71900,
								minimum_price_display: '$719',
								minimum_price_monthly_display: '$59.92',
								maximum_price: 71900,
								maximum_price_display: '$719',
								maximum_price_monthly_display: '$59.92',
							},
							{
								minimum_units: 100001,
								maximum_units: 1000000,
								minimum_price: 239900,
								minimum_price_display: '$2,399',
								minimum_price_monthly_display: '$199.92',
								maximum_price: 239900,
								maximum_price_display: '$2,399',
								maximum_price_monthly_display: '$199.92',
							},
							{
								minimum_units: 1000001,
								maximum_units: null,
								minimum_price: 479800,
								minimum_price_display: '$4,798',
								minimum_price_monthly_display: '$399.84',
								maximum_price: 0,
								maximum_price_display: null,
								maximum_price_monthly_display: null,
							},
						],
						price_tier_usage_quantity: 111,
						product_term: 'year',
						price_tiers: [],
						price_tier_slug: '',
						sale_cost: 59.5,
						combined_sale_cost_display: '$59.50',
						sale_coupon: {
							start_date: '2022-06-20 00:00:00',
							expires: '2023-06-20 00:00:00',
							discount: 50,
							purchase_types: [ 3 ],
							product_ids: [ 2104 ],
							allowed_for_domain_transfers: false,
							allowed_for_renewals: false,
							allowed_for_new_purchases: true,
							code: 'b07ac1e15cb15678',
						},
					},
					jetpack_search_monthly: {
						product_id: 2105,
						product_name: 'Jetpack Search',
						product_slug: 'jetpack_search_monthly',
						description: '',
						product_type: 'search',
						available: true,
						billing_product_slug: 'jetpack-search',
						is_domain_registration: false,
						cost_display: '$10.00',
						combined_cost_display: '$10.00',
						cost: 10,
						currency_code: 'USD',
						price_tier_list: [
							{
								minimum_units: 0,
								maximum_units: 100,
								minimum_price: 500,
								minimum_price_display: '$5',
								minimum_price_monthly_display: '$5',
								maximum_price: 500,
								maximum_price_display: '$5',
								maximum_price_monthly_display: '$5',
							},
							{
								minimum_units: 101,
								maximum_units: 1000,
								minimum_price: 1000,
								minimum_price_display: '$10',
								minimum_price_monthly_display: '$10',
								maximum_price: 1000,
								maximum_price_display: '$10',
								maximum_price_monthly_display: '$10',
							},
							{
								minimum_units: 1001,
								maximum_units: 10000,
								minimum_price: 2495,
								minimum_price_display: '$24.95',
								minimum_price_monthly_display: '$24.95',
								maximum_price: 2495,
								maximum_price_display: '$24.95',
								maximum_price_monthly_display: '$24.95',
							},
							{
								minimum_units: 10001,
								maximum_units: 100000,
								minimum_price: 5995,
								minimum_price_display: '$59.95',
								minimum_price_monthly_display: '$59.95',
								maximum_price: 5995,
								maximum_price_display: '$59.95',
								maximum_price_monthly_display: '$59.95',
							},
							{
								minimum_units: 100001,
								maximum_units: 1000000,
								minimum_price: 19995,
								minimum_price_display: '$199.95',
								minimum_price_monthly_display: '$199.95',
								maximum_price: 19995,
								maximum_price_display: '$199.95',
								maximum_price_monthly_display: '$199.95',
							},
							{
								minimum_units: 1000001,
								maximum_units: null,
								minimum_price: 39990,
								minimum_price_display: '$399.90',
								minimum_price_monthly_display: '$399.90',
								maximum_price: 0,
								maximum_price_display: null,
								maximum_price_monthly_display: null,
							},
						],
						price_tier_usage_quantity: 111,
						product_term: 'month',
						price_tiers: [],
						price_tier_slug: '',
					},
					jetpack_scan: {
						product_id: 2106,
						product_name: 'Jetpack Scan Daily',
						product_slug: 'jetpack_scan',
						description: '',
						product_type: 'jetpack',
						available: true,
						billing_product_slug: 'jetpack-scan',
						is_domain_registration: false,
						cost_display: '$119.40',
						combined_cost_display: '$119.40',
						cost: 119.4,
						currency_code: 'USD',
						price_tier_list: [],
						price_tier_usage_quantity: null,
						product_term: 'year',
						price_tiers: [],
						price_tier_slug: '',
						introductory_offer: {
							interval_unit: 'year',
							interval_count: 1,
							usage_limit: null,
							cost_per_interval: 59.4,
							transition_after_renewal_count: 0,
							should_prorate_when_offer_ends: false,
						},
					},
					jetpack_scan_monthly: {
						product_id: 2107,
						product_name: 'Jetpack Scan Daily',
						product_slug: 'jetpack_scan_monthly',
						description: '',
						product_type: 'jetpack',
						available: true,
						billing_product_slug: 'jetpack-scan',
						is_domain_registration: false,
						cost_display: '$9.95',
						combined_cost_display: '$9.95',
						cost: 9.95,
						currency_code: 'USD',
						price_tier_list: [],
						price_tier_usage_quantity: null,
						product_term: 'month',
						price_tiers: [],
						price_tier_slug: '',
					},
					jetpack_scan_realtime: {
						product_id: 2108,
						product_name: 'Jetpack Scan Realtime',
						product_slug: 'jetpack_scan_realtime',
						description: '',
						product_type: 'jetpack',
						available: true,
						billing_product_slug: 'jetpack-scan-realtime',
						is_domain_registration: false,
						cost_display: '$500.00',
						combined_cost_display: '$500.00',
						cost: 500,
						currency_code: 'USD',
						price_tier_list: [],
						price_tier_usage_quantity: null,
						product_term: 'year',
						price_tiers: [],
						price_tier_slug: '',
					},
					jetpack_scan_realtime_monthly: {
						product_id: 2109,
						product_name: 'Jetpack Scan Realtime',
						product_slug: 'jetpack_scan_realtime_monthly',
						description: '',
						product_type: 'jetpack',
						available: true,
						billing_product_slug: 'jetpack-scan-realtime',
						is_domain_registration: false,
						cost_display: '$50.00',
						combined_cost_display: '$50.00',
						cost: 50,
						currency_code: 'USD',
						price_tier_list: [],
						price_tier_usage_quantity: null,
						product_term: 'month',
						price_tiers: [],
						price_tier_slug: '',
					},
					jetpack_anti_spam: {
						product_id: 2110,
						product_name: 'Jetpack Anti-Spam',
						product_slug: 'jetpack_anti_spam',
						description: '',
						product_type: 'jetpack',
						available: true,
						billing_product_slug: 'jetpack-anti-spam',
						is_domain_registration: false,
						cost_display: '$119.40',
						combined_cost_display: '$119.40',
						cost: 119.4,
						currency_code: 'USD',
						price_tier_list: [],
						price_tier_usage_quantity: null,
						product_term: 'year',
						price_tiers: [],
						price_tier_slug: '',
						introductory_offer: {
							interval_unit: 'year',
							interval_count: 1,
							usage_limit: null,
							cost_per_interval: 59.4,
							transition_after_renewal_count: 0,
							should_prorate_when_offer_ends: false,
						},
					},
					jetpack_anti_spam_monthly: {
						product_id: 2111,
						product_name: 'Jetpack Anti-Spam',
						product_slug: 'jetpack_anti_spam_monthly',
						description: '',
						product_type: 'jetpack',
						available: true,
						billing_product_slug: 'jetpack-anti-spam',
						is_domain_registration: false,
						cost_display: '$9.95',
						combined_cost_display: '$9.95',
						cost: 9.95,
						currency_code: 'USD',
						price_tier_list: [],
						price_tier_usage_quantity: null,
						product_term: 'month',
						price_tiers: [],
						price_tier_slug: '',
					},
					jetpack_backup_t1_yearly: {
						product_id: 2112,
						product_name: 'Jetpack Backup (10GB)',
						product_slug: 'jetpack_backup_t1_yearly',
						description: '',
						product_type: 'jetpack',
						available: true,
						billing_product_slug: 'jetpack-backup-tier-1',
						is_domain_registration: false,
						cost_display: '$119.40',
						combined_cost_display: '$119.40',
						cost: 119.4,
						currency_code: 'USD',
						price_tier_list: [],
						price_tier_usage_quantity: null,
						product_term: 'year',
						price_tiers: [],
						price_tier_slug: '',
						introductory_offer: {
							interval_unit: 'year',
							interval_count: 1,
							usage_limit: null,
							cost_per_interval: 59.4,
							transition_after_renewal_count: 0,
							should_prorate_when_offer_ends: false,
						},
					},
					jetpack_backup_t1_monthly: {
						product_id: 2113,
						product_name: 'Jetpack Backup (10GB)',
						product_slug: 'jetpack_backup_t1_monthly',
						description: '',
						product_type: 'jetpack',
						available: true,
						billing_product_slug: 'jetpack-backup-tier-1',
						is_domain_registration: false,
						cost_display: '$9.95',
						combined_cost_display: '$9.95',
						cost: 9.95,
						currency_code: 'USD',
						price_tier_list: [],
						price_tier_usage_quantity: null,
						product_term: 'month',
						price_tiers: [],
						price_tier_slug: '',
					},
					jetpack_backup_t2_yearly: {
						product_id: 2114,
						product_name: 'Jetpack Backup (1TB)',
						product_slug: 'jetpack_backup_t2_yearly',
						description: '',
						product_type: 'jetpack',
						available: true,
						billing_product_slug: 'jetpack-backup-tier-2',
						is_domain_registration: false,
						cost_display: '$359.40',
						combined_cost_display: '$359.40',
						cost: 359.4,
						currency_code: 'USD',
						price_tier_list: [],
						price_tier_usage_quantity: null,
						product_term: 'year',
						price_tiers: [],
						price_tier_slug: '',
						introductory_offer: {
							interval_unit: 'year',
							interval_count: 1,
							usage_limit: null,
							cost_per_interval: 143.4,
							transition_after_renewal_count: 0,
							should_prorate_when_offer_ends: false,
						},
					},
					jetpack_backup_t2_monthly: {
						product_id: 2115,
						product_name: 'Jetpack Backup (1TB)',
						product_slug: 'jetpack_backup_t2_monthly',
						description: '',
						product_type: 'jetpack',
						available: true,
						billing_product_slug: 'jetpack-backup-tier-2',
						is_domain_registration: false,
						cost_display: '$29.95',
						combined_cost_display: '$29.95',
						cost: 29.95,
						currency_code: 'USD',
						price_tier_list: [],
						price_tier_usage_quantity: null,
						product_term: 'month',
						price_tiers: [],
						price_tier_slug: '',
					},
					jetpack_videopress: {
						product_id: 2116,
						product_name: 'Jetpack VideoPress',
						product_slug: 'jetpack_videopress',
						description: '',
						product_type: 'jetpack',
						available: true,
						billing_product_slug: 'jetpack-videopress',
						is_domain_registration: false,
						cost_display: '$119.40',
						combined_cost_display: '$119.40',
						cost: 119.4,
						currency_code: 'USD',
						price_tier_list: [],
						price_tier_usage_quantity: null,
						product_term: 'year',
						price_tiers: [],
						price_tier_slug: '',
						introductory_offer: {
							interval_unit: 'year',
							interval_count: 1,
							usage_limit: null,
							cost_per_interval: 59.4,
							transition_after_renewal_count: 0,
							should_prorate_when_offer_ends: false,
						},
					},
					jetpack_videopress_monthly: {
						product_id: 2117,
						product_name: 'Jetpack VideoPress',
						product_slug: 'jetpack_videopress_monthly',
						description: '',
						product_type: 'jetpack',
						available: true,
						billing_product_slug: 'jetpack-videopress',
						is_domain_registration: false,
						cost_display: '$9.95',
						combined_cost_display: '$9.95',
						cost: 9.95,
						currency_code: 'USD',
						price_tier_list: [],
						price_tier_usage_quantity: null,
						product_term: 'month',
						price_tiers: [],
						price_tier_slug: '',
					},
					jetpack_backup_t0_yearly: {
						product_id: 2120,
						product_name: 'Jetpack Backup (1GB)',
						product_slug: 'jetpack_backup_t0_yearly',
						description: '',
						product_type: 'jetpack',
						available: true,
						billing_product_slug: 'jetpack-backup-tier-0',
						is_domain_registration: false,
						cost_display: '$35.88',
						combined_cost_display: '$35.88',
						cost: 35.88,
						currency_code: 'USD',
						price_tier_list: [],
						price_tier_usage_quantity: null,
						product_term: 'year',
						price_tiers: [],
						price_tier_slug: '',
					},
					jetpack_backup_t0_monthly: {
						product_id: 2121,
						product_name: 'Jetpack Backup (1GB)',
						product_slug: 'jetpack_backup_t0_monthly',
						description: '',
						product_type: 'jetpack',
						available: true,
						billing_product_slug: 'jetpack-backup-tier-0',
						is_domain_registration: false,
						cost_display: '$2.99',
						combined_cost_display: '$2.99',
						cost: 2.99,
						currency_code: 'USD',
						price_tier_list: [],
						price_tier_usage_quantity: null,
						product_term: 'month',
						price_tiers: [],
						price_tier_slug: '',
					},
					jetpack_backup_one_time: {
						product_id: 2201,
						product_name: 'Jetpack Backup (One-time)',
						product_slug: 'jetpack_backup_one_time',
						description: '',
						product_type: 'jetpack',
						available: true,
						billing_product_slug: 'jetpack-backup-one-time',
						is_domain_registration: false,
						cost_display: '$0.99',
						combined_cost_display: '$0.99',
						cost: 0.99,
						currency_code: 'USD',
						price_tier_list: [],
						price_tier_usage_quantity: null,
						product_term: 'one time',
						price_tiers: [],
						price_tier_slug: '',
					},
					jetpack_boost_monthly: {
						product_id: 2400,
						product_name: 'Jetpack Boost',
						product_slug: 'jetpack_boost_monthly',
						description: '',
						product_type: 'jetpack',
						available: true,
						billing_product_slug: 'jetpack-boost',
						is_domain_registration: false,
						cost_display: '$19.95',
						combined_cost_display: '$19.95',
						cost: 19.95,
						currency_code: 'USD',
						price_tier_list: [],
						price_tier_usage_quantity: null,
						product_term: 'month',
						price_tiers: [],
						price_tier_slug: '',
					},
					jetpack_boost_yearly: {
						product_id: 2401,
						product_name: 'Jetpack Boost',
						product_slug: 'jetpack_boost_yearly',
						description: '',
						product_type: 'jetpack',
						available: true,
						billing_product_slug: 'jetpack-boost',
						is_domain_registration: false,
						cost_display: '$239.40',
						combined_cost_display: '$239.40',
						cost: 239.4,
						currency_code: 'USD',
						price_tier_list: [],
						price_tier_usage_quantity: null,
						product_term: 'year',
						price_tiers: [],
						price_tier_slug: '',
						introductory_offer: {
							interval_unit: 'year',
							interval_count: 1,
							usage_limit: null,
							cost_per_interval: 119.4,
							transition_after_renewal_count: 0,
							should_prorate_when_offer_ends: false,
						},
					},
				},
				requests: {
					isFetching: false,
				},
			},
			siteData: {
				data: {
					plan: {
						product_slug: 'jetpack_free',
					},
					sitePurchases: [],
				},
				requests: {
					isFetchingSiteData: false,
					isFetchingSiteFeatures: false,
					isFetchingSitePlans: false,
					isFetchingSitePurchases: false,
				},
			},
			settings: {
				items: [],
			},
			introOffers: {
				data: [],
			},
		},
	};
}
