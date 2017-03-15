
# 表单 - Form

<form>
  <label for="name">输入框</label>
  <input class="form-control" type="text" id="name">
  
  <label for="name">下拉选择</label>
  <select class="form-select">
    <option>Choose an option</option>
    <option>Git</option>
    <option>Subversion</option>
    <option>Social Coding</option>
    <option>Beets</option>
    <option>Bears</option>
    <option>Battlestar Galactica</option>
  </select>


  <label>
    <input type="checkbox"> 复选
  </label>

  <label>
    <input type="radio" id="herp" name="herpderp" checked> 单选
  </label>
  <label>
    <input type="radio" id="derp" name="herpderp"> 单选
  </label>

  <button class="btn" type="submit">Submit</button>
</form>

<form>
  <div class="form-checkbox">
    <label>
      <input type="checkbox" checked="checked">
      Available for hire
    </label>
    <p class="note">
      This will do insanely <strong>awesome</strong> and <strong>amazing</strong> things!
    </p>
  </div>
</form>


<div class="form-actions">
  <button type="button" class="btn btn-primary">Save changes</button>
  <button type="button" class="btn">Cancel</button>
</div>
