package com.mouseclicks.auth;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ProviderController { 

	 @Autowired
	    ProviderRepository dao;
	 
	 @GetMapping("/chat")
	    public List<Provider> getProvider() {
	        List<Provider> foundProvider = dao.findAll();
	        return foundProvider;
	    }
	 @GetMapping("/chat/{id}")
	    public ResponseEntity<Provider> getProvider(@PathVariable("id") Integer id) {
	        Provider foundProvider = dao.findById(id).orElse(null);

	        if(foundProvider == null) {
	            return ResponseEntity.notFound().header("Provider","Nothing found with that id").build();
	        }
	        return ResponseEntity.ok(foundProvider);
	    }

	    @PostMapping("/chat")
	    public ResponseEntity<Provider> postProvider(@RequestBody Provider provider) {

	        // saving to DB using instance of the repo interface
	        Provider createdProvider = dao.save(provider);

	        // RespEntity crafts response to include correct status codes.
	        return ResponseEntity.ok(createdProvider);
	    }

	    @DeleteMapping("/chat/{id}")
	    public ResponseEntity<Provider> deleteMessage(@PathVariable(value="id") Integer id) {
	        Provider foundProvider = dao.findById(id).orElse(null);

	        if(foundProvider == null) {
	            return ResponseEntity.notFound().header("Provider","Nothing found with that id").build();
	        }else {
	            dao.delete(foundProvider);
	        }
	        return ResponseEntity.ok().build();
	    }
	}
