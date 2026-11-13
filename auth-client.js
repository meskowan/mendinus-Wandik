const supabaseClient = window.supabase.createClient(window.SUPABASE_URL, window.SUPABASE_ANON_KEY);
async function requireUser(){ const {data:{user}}=await supabaseClient.auth.getUser(); if(!user){location.href='login.html';return null;} return user;}
async function getMyProfile(){const user=await requireUser();if(!user)return null;const {data,error}=await supabaseClient.from('profiles').select('*').eq('id',user.id).single();if(error)throw error;return {user,profile:data};}
async function requireAdmin(){const x=await getMyProfile();if(!x)return null;if(x.profile.role!=='admin'){alert('Halaman ini khusus admin.');location.href='dashboard.html';return null;}return x;}
function showMessage(el,msg,isError=false){el.textContent=msg;el.style.color=isError?'#ff9292':'#5ee7df';}
