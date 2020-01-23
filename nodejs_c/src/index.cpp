#include <napi.h>
#include <string>
#include "greeting.h"

Napi::Number greetHello(const Napi::CallbackInfo& info){
	Napi::Env env = info.Env();
	std::string user = info[0].As<Napi::String>();

	//std::string result = helloUser(user);
	int sp = 0;
	
	int cnt = 0;
	while(sp < user.size()){
		if(user[sp] == ' '){
			cnt++;
			sp++;
		}
		else{
			sp++;
		}
	}
	return Napi::Number::New(env, (double)cnt);
}

Napi::Object Init(Napi::Env env, Napi::Object exports){
	exports.Set(
		Napi::String::New(env, "greetHello"),
		Napi::Function::New(env, greetHello)
		);
	return exports;
}

NODE_API_MODULE(greet,Init);