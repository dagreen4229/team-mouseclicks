package snippet;

public class Snippet {
	public static void main(String[] args) {
		return ResponseEntity.notFound().header("NotFound", "No client found by that id").build();
				} else {
					return ResponseEntity.ok(foundClient);
				}
			}
			
	}
}

