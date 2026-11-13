
const supabaseClient = window.supabase.createClient(
  window.SUPABASE_URL,
  window.SUPABASE_ANON_KEY
);

async function requireUser() {
  const { data, error } = await supabaseClient.auth.getUser();

  if (error || !data.user) {
    location.href = 'login.html';
    return null;
  }

  return data.user;
}

async function getMyProfile() {
  const user = await requireUser();
  if (!user) return null;

  const { data, error } = await supabaseClient
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .maybeSingle();

  if (error) {
    console.error('Profile error:', error);
    throw error;
  }

  if (!data) {
    throw new Error(
      'Profil belum ditemukan. Periksa trigger pendaftaran Supabase.'
    );
  }

  return { user, profile: data };
}

async function requireAdmin() {
  const result = await getMyProfile();
  if (!result) return null;

  if (result.profile.role !== 'admin') {
    alert('Halaman ini khusus admin.');
    location.href = 'dashboard.html';
    return null;
  }

  return result;
}

function showMessage(el, msg, isError = false) {
  el.textContent = msg;
  el.style.color = isError ? '#ff9292' : '#5ee7df';
}
