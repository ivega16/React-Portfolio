export default function Contact() {
  return (
    <div class="form-floating">
  <input type="email" class="form-control is-invalid" id="floatingInputInvalid" placeholder="name@example.com" value="test@example.com"/>
  <label for="floatingInputInvalid">Invalid input</label>

  <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
      <label for="floatingTextarea">Comments</label>

</div>
  );
}
