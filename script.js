// UI Functions
function showMessage() {
  document.getElementById('msg').textContent = 'Pipeline is working!';
}

// =============================================
// TEST SECRETS - For GitLeaks scanning demo
// WARNING: Never use real secrets in code!
// =============================================

// Fake AWS Access Key (GitLeaks detects this pattern)
const AWS_ACCESS_KEY_ID = "AKIAIOSFODNN7EXAMPLE";
const AWS_SECRET_ACCESS_KEY = "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY";

// Fake GitHub Token (GitLeaks detects this pattern)
const GITHUB_TOKEN = "ghp_exampleFakeToken1234567890abcdef";

// Fake Stripe Key
const STRIPE_KEY = "sk_test_examplefakestripekey1234567890";

// =============================================
// NOTE: Yeh sab FAKE keys hain — sirf
// GitLeaks scanner ko trigger karne ke liye
// =============================================

function getConfig() {
  return {
    apiKey: AWS_ACCESS_KEY_ID,
    region: "us-east-1"
  };
}